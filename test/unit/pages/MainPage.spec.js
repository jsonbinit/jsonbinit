import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/index.vue'

import '@/plugins/vue-inject'
import '@/plugins/global'

Vue.prototype.$nuxt = {
  $loading: {
    start: () => {},
    finish: () => {}
  }
}

Vue.prototype.$toast = {
  show: jest.fn()
}

describe('Index page', () => {
  // eslint-disable-next-line no-unused-expressions
  it('is a Vue instance', () => {
    const wrapper = shallowMount(MainPage, {
      stubs: [
        'nuxt-link', 'bin-header', 'font-awesome-icon',
        'client-only', 'bin-footer'
      ]
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('check valid JSON', () => {
    const wrapper = shallowMount(MainPage, {
      stubs: [
        'nuxt-link', 'bin-header', 'font-awesome-icon',
        'client-only', 'bin-footer'
      ]
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.vm.isAValidJSON('{"val" : 2}')).toBeTruthy()
    expect(!wrapper.vm.isAValidJSON('"val" : 2')).toBeTruthy()
    wrapper.vm.enableButton('{"val" : 2}')
    expect(wrapper.vm.buttonEnabled).toBeTruthy()
    wrapper.vm.enableButton('1')
    expect(!wrapper.vm.buttonEnabled).toBeTruthy()
  })

  it('calls service API correctly', async () => {
    const $router = new VueRouter()
    $router.push = jest.fn()
    const wrapper = shallowMount(MainPage, {
      mocks: {
        $router
      },
      stubs: [
        'nuxt-link', 'bin-header', 'font-awesome-icon',
        'client-only', 'bin-footer'
      ]
    })

    wrapper.vm.code = JSON.stringify({ color: 'blue' })
    wrapper.vm.pushJson()
    expect(axios.post).toBeCalledWith(
      'https://api.jsonbin.it/bins/', { color: 'blue' }, { headers: { 'Content-Type': 'application/json' } }
    )
    await Vue.nextTick()
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/bins/WySIwYg3')
  })

  it('calls service API not correctly', async () => {
    const $router = new VueRouter()
    $router.push = jest.fn()
    const wrapper = shallowMount(MainPage, {
      mocks: {
        $router
      },
      stubs: [
        'nuxt-link', 'bin-header', 'font-awesome-icon',
        'client-only', 'bin-footer'
      ]
    })

    wrapper.vm.code = JSON.stringify({ data: 'fail' })
    wrapper.vm.pushJson()
    expect(axios.post).toBeCalledWith(
      'https://api.jsonbin.it/bins/', { data: 'fail' }, { headers: { 'Content-Type': 'application/json' } }
    )
    await Vue.nextTick()
  })
})

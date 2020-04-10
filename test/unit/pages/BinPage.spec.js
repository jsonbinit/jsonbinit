
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import axios from 'axios'

import BinPage from '@/pages/bins/_id/index.vue'

import '@/plugins/vue-inject'
import '@/plugins/global'

Vue.prototype.$nuxt = {
  $loading: { start: () => {} }
}

describe('Bin reading page', () => {
  // eslint-disable-next-line no-unused-expressions
  it('fetch on mount', async () => {
    Vue.prototype.$route = {
      params: { id: 1 }
    }
    const wrapper = shallowMount(BinPage, {
      stubs: [
        'nuxt-link', 'font-awesome-icon',
        'client-only'
      ]
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(axios.get).toBeCalledWith(
      'https://api.jsonbin.it/bins/1', { headers: { 'Content-Type': 'application/json' } }
    )
    await Vue.nextTick()
    expect(wrapper.vm.code).toEqual(JSON.stringify({ data: 3 }, null, 2))
  })
  it('fetch 404 on mount', async () => {
    Vue.prototype.$route = {
      params: { id: 2 }
    }
    const wrapper = shallowMount(BinPage, {
      stubs: [
        'nuxt-link', 'font-awesome-icon',
        'client-only'
      ]
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(axios.get).toBeCalledWith(
      'https://api.jsonbin.it/bins/2', { headers: { 'Content-Type': 'application/json' } }
    )
    await Vue.nextTick()
    expect(wrapper.vm.code).toEqual(JSON.stringify({ result: 'JSON \'2\' not found' }, null, 2))
  })
  it('fetch 500 on mount', async () => {
    Vue.prototype.$route = {
      params: { id: 'D1TT0' }
    }
    const wrapper = shallowMount(BinPage, {
      stubs: [
        'nuxt-link', 'font-awesome-icon',
        'client-only'
      ]
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(axios.get).toBeCalledWith(
      'https://api.jsonbin.it/bins/D1TT0', { headers: { 'Content-Type': 'application/json' } }
    )
    await Vue.nextTick()
    expect(wrapper.vm.code).toEqual(JSON.stringify({ result: 'Server error for JSON \'D1TT0\'' }, null, 2))
  })
})

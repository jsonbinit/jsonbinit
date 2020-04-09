import { shallowMount } from '@vue/test-utils'
import MainPage from '@/pages/index.vue'

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
    wrapper.vm.enableButton('{"val" : 2}')
    expect(wrapper.vm.buttonEnabled).toBeTruthy()
    wrapper.vm.enableButton('1')
    expect(!wrapper.vm.buttonEnabled).toBeTruthy()
  })
})

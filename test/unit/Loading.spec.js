import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Loading from '@/components/Loading.vue'

describe('Loading component', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Loading, { stubs: ['font-awesome-icon'] })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('shows loading icon on start', async () => {
    const wrapper = shallowMount(Loading, { stubs: ['font-awesome-icon'] })
    wrapper.vm.start()
    await Vue.nextTick()
    expect(wrapper.findAll('p').exists()).toBeTruthy()
  })
  it('hides loading icon on finish', async () => {
    const wrapper = shallowMount(Loading, { stubs: ['font-awesome-icon'] })
    wrapper.vm.finish()
    await Vue.nextTick()
    expect(!wrapper.findAll('p').exists()).toBeTruthy()
  })
})

import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BinHeader from '@/components/BinHeader.vue'

describe('BinHeader component', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(BinHeader, { stubs: ['nuxt-link'] })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('is a able to hide Github', async () => {
    const wrapper = shallowMount(
      BinHeader, {
        stubs: ['nuxt-link'],
        propsData: {
          hidegithub: true
        }
      })
    await Vue.nextTick()
    expect(!wrapper.findAll('github-corner-stub').exists()).toBeTruthy()
  })
})

import { shallowMount } from '@vue/test-utils'
import BinFooter from '@/components/BinFooter.vue'

describe('BinFooter component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(BinFooter, { stubs: ['nuxt-link'] })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

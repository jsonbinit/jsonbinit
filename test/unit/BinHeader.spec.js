import { shallowMount } from '@vue/test-utils'
import BinHeader from '@/components/BinHeader.vue'

describe('BinHeader component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(BinHeader, { stubs: ['nuxt-link'] })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

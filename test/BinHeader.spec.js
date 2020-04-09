import { mount } from '@vue/test-utils'
import BinHeader from '@/components/BinHeader.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BinHeader)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

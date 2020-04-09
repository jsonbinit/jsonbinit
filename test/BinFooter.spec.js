import { mount } from '@vue/test-utils'
import BinFooter from '@/components/BinFooter.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BinFooter)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

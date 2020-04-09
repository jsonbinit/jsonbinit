import { mount } from '@vue/test-utils'
import Loading from '@/components/Loading.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Loading)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

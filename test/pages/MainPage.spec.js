import { shallowMount } from '@vue/test-utils'
import MainPage from '@/pages/index.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MainPage)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

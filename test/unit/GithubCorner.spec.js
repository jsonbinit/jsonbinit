import { mount } from '@vue/test-utils'
import GithubCorner from '@/components/GithubCorner.vue'

describe('GithubCorner component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(GithubCorner)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

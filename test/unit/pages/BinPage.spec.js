import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'

import BinPage from '@/pages/bins/_id/index.vue'
import '@/plugins/vue-inject'
import '@/plugins/global'

Vue.prototype.$route = {
  params: { id: 1 }
}
Vue.prototype.$nuxt = {
  $loading: { start: () => {} }
}

describe('Bin reading page', () => {
  // eslint-disable-next-line no-unused-expressions
  it('is a Vue instance', () => {
    const wrapper = shallowMount(BinPage, {
      stubs: [
        'nuxt-link', 'font-awesome-icon',
        'client-only'
      ]
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

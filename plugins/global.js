import Vue from 'vue'
import Clipboard from 'v-clipboard'

import { icon } from '@fortawesome/fontawesome-svg-core'
import BinHeader from '~/components/BinHeader'
import BinFooter from '~/components/BinFooter'

Vue.component('bin-header', BinHeader)
Vue.component('bin-footer', BinFooter)
Vue.use(Clipboard)

Vue.mixin({
  methods: {
    $getSvgIcons (el, preFix, name) {
      const check = icon({ prefix: preFix, iconName: name })
      el.innerHTML = check.html
      return el
    }
  }
})

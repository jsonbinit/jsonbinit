import Vue from 'vue'
import Clipboard from 'v-clipboard'

import BinHeader from '~/components/BinHeader'
import BinFooter from '~/components/BinFooter'

Vue.component('bin-header', BinHeader)
Vue.component('bin-footer', BinFooter)
Vue.use(Clipboard)

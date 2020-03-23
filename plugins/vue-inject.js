import Vue from 'vue'
import ApiService from '~/services/apiservice.js'

Vue.prototype.$apiservice = new ApiService()

import axios from 'axios'

export default class ApiService {

  constructor () {
    this.apiUrl = 'https://api.jsonbin.it/bins/'
    this.apiHeaders = {
      'Content-Type': 'application/json'
    }
  }

  composeJSONBinUrl (jsonId) {
    return this.apiUrl + jsonId
  }

  getJSON (jsonId) {
    return axios.get(this.composeJSONBinUrl(jsonId), {
      headers: this.apiHeaders
    })
  }

  postJSON (json) {
    return axios.post(this.apiUrl, json, {
      headers: this.apiHeaders
    })
  }
}

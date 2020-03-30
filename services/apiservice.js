import axios from 'axios'

export default class ApiService {
  apiUrl = 'https://api.myjson.com/bins';
  composeJSONBinUrl (jsonId) {
    return this.apiUrl + `/${jsonId}`
  }

  getJSON (jsonId) {
    return axios.get(this.composeJSONBinUrl(jsonId))
  }

  postJSON (json) {
    return axios.post(this.apiUrl, { json })
  }
}

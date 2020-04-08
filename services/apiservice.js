import axios from 'axios'

export default class ApiService {
  apiUrl = 'http://161.35.18.103:8080/api/bins/';
  apiHeaders = {
    'Content-Type': 'application/json'
  };

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

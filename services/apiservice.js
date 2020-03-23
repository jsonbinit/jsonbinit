import axios from 'axios'

export default class ApiService {
  composeJSONBinUrl (jsonId) {
    return `https://api.myjson.com/bins/${jsonId}`
  }

  getJSON (jsonId) {
    return axios.get(this.composeJSONBinUrl(jsonId))
  }
}

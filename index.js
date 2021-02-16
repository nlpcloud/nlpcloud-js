const axios = require('axios')

const BASE_URL = 'https://api.nlpcloud.io'
const API_VERSION = 'v1'

class Client {
  constructor(model, token) {
    this.headers = {
      'Authorization': 'Token ' + token
    }
    this.rootURL = BASE_URL + '/' + API_VERSION + '/' + model
  }

  _apiPost(endpoint, userInput) {
    const payload = {
      'text': userInput
    };

    return axios.post(this.rootURL + '/' + endpoint, payload, { headers: this.headers })
  }

  _apiGet(endpoint) {
    return axios.get(this.rootURL + '/' + endpoint, { headers: this.headers })
  }

  entities(userInput) {
    return this._apiPost('entities', userInput)
  }
  dependencies(userInput) {
    return this._apiPost('dependencies', userInput)
  }
  sentenceDependencies(userInput) {
    return this._apiPost('sentence-dependencies', userInput)
  }
  libVersions() {
    return this._apiGet('version')
  }
}

module.exports = Client
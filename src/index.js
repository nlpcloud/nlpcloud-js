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

  async _apiPost(endpoint, userInput) {
    const payload = {
      'text': userInput
    };

    let response

    try {
      const r = await axios.post(this.rootURL + '/' + endpoint, payload, { headers: this.headers })
      response = r.data
    }
    catch (error) {
      response = 'Status ' + error.response.status + ': ' + JSON.stringify(error.response.data)
    }

    return response
  }

  async _apiGet(endpoint) {
    let response

    try {
      const r = await axios.get(this.rootURL + '/' + endpoint, { headers: this.headers })
      response = r.data
    }
    catch (error) {
      response = 'Status ' + error.response.status + ': ' + JSON.stringify(error.response.data)
    }

    return response
  }

  async entities(userInput) {
    const response = await this._apiPost('entities', userInput)
    return response

  }
  async dependencies(userInput) {
    const response = await this._apiPost('dependencies', userInput)
    return response
  }
  async sentenceDependencies(userInput) {
    const response = await this._apiPost('sentence-dependencies', userInput)
    return response
  }
  async libVersions() {
    const response = await this._apiGet('version')
    return response
  }
}


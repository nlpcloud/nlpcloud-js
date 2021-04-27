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

  entities(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'entities', payload, { headers: this.headers })
  }

  classification(text, labels, multiClass) {
    const payload = {
      'text': text,
      'labels': labels,
      'multiClass': multiClass
    };

    return axios.post(this.rootURL + '/' + 'classification', payload, { headers: this.headers })
  }

  sentiment(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'sentiment', payload, { headers: this.headers })
  }

  question(context, question) {
    const payload = {
      'context': context,
      'question': question
    };

    return axios.post(this.rootURL + '/' + 'question', payload, { headers: this.headers })
  }

  summarization(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'summarization', payload, { headers: this.headers })
  }

  translation(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'translation', payload, { headers: this.headers })
  }

  dependencies(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'dependencies', payload, { headers: this.headers })
  }

  sentenceDependencies(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'sentence-dependencies', payload, { headers: this.headers })
  }

  libVersions() {
    return axios.get(this.rootURL + '/' + 'versions', { headers: this.headers })
  }
}

module.exports = Client
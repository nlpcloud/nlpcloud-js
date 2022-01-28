const axios = require('axios')

const BASE_URL = 'https://api.nlpcloud.io'
const API_VERSION = 'v1'

class Client {
  constructor(model, token, gpu = false, lang = '') {
    this.headers = {
      'Authorization': 'Token ' + token,
      'User-Agent': 'nlpcloud-javascript-client'
    }

    if (gpu && lang != '') {
      this.rootURL = BASE_URL + '/' + API_VERSION + '/gpu/' + lang + '/' + model
    }
    else if (gpu && lang == '') {
      this.rootURL = BASE_URL + '/' + API_VERSION + '/gpu/' + model
    }
    else if (!gpu && lang != '') {
      this.rootURL = BASE_URL + '/' + API_VERSION + '/' + lang + '/' + model
    }
    else {
      this.rootURL = BASE_URL + '/' + API_VERSION + '/' + model
    }
  }

  entities(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'entities', payload, { headers: this.headers })
  }

  classification(text, labels, multiClass = null) {
    const payload = {
      'text': text,
      'labels': labels,
      'multi_class': multiClass
    };

    return axios.post(this.rootURL + '/' + 'classification', payload, { headers: this.headers })
  }

  generation(text, minLength = null, maxLength = null, lengthNoInput = null,
    endSequence = null, removeInput = null, doSample = null, numBeams = null, earlyStopping = null,
    noRepeatNgramSize = null, numReturnSequences = null, topK = null, topP = null,
    temperature = null, repetitionPenalty = null, lengthPenalty = null, badWords = null, removeEndSequence = null) {
    const payload = {
      'text': text,
      'min_length': minLength,
      'max_length': maxLength,
      'length_no_input': lengthNoInput,
      'end_sequence': endSequence,
      'remove_input': removeInput,
      'do_sample': doSample,
      'num_beams': numBeams,
      'early_stopping': earlyStopping,
      'no_repeat_ngram_size': noRepeatNgramSize,
      'num_return_sequences': numReturnSequences,
      'top_k': topK,
      'top_p': topP,
      'temperature': temperature,
      'repetition_penalty': repetitionPenalty,
      'length_penalty': lengthPenalty,
      'bad_words': badWords,
      'remove_end_sequence': removeEndSequence
    };

    return axios.post(this.rootURL + '/' + 'generation', payload, { headers: this.headers })
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

  langdetection(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'langdetection', payload, { headers: this.headers })
  }

  tokens(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'tokens', payload, { headers: this.headers })
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
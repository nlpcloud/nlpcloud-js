const axios = require('axios')

const BASE_URL = 'https://api.nlpcloud.io'
const API_VERSION = 'v1'

class Client {
  constructor(model, token, gpu = false, lang = '', asynchronous = false) {
    this.headers = {
      'Authorization': 'Token ' + token,
      'User-Agent': 'nlpcloud-javascript-client'
    }

    this.rootURL = BASE_URL + '/' + API_VERSION + '/'

    if (lang == 'en') {
      lang = ''
    }
    if (lang == 'eng_Latn') {
      lang = ''
    }

    if (gpu) {
      this.rootURL += 'gpu/'
    }

    if (asynchronous) {
      this.rootURL += "async/"
    }

    if (lang != '') {
      this.rootURL += lang + '/'
    }

    this.rootURL += model
  }


  adGeneration(keywords) {
    const payload = {
      'keywords': keywords
    };

    return axios.post(this.rootURL + '/' + 'ad-generation', payload, { headers: this.headers })
  }

  asr(url = null, encodedFile = null, inputLanguage = null) {
    const payload = {
      'url': url,
      'encoded_file': encodedFile,
      'input_language': inputLanguage
    };

    return axios.post(this.rootURL + '/' + 'asr', payload, { headers: this.headers })
  }

  asyncResult(url) {
    return axios.get(url, { headers: this.headers })
  }

  chatbot(input, context = null, history = null) {
    const payload = {
      'input': input,
      'context': context,
      'history': history
    };

    return axios.post(this.rootURL + '/' + 'chatbot', payload, { headers: this.headers })
  }

  classification(text, labels = null, multiClass = null) {
    const payload = {
      'text': text,
      'labels': labels,
      'multi_class': multiClass
    };

    return axios.post(this.rootURL + '/' + 'classification', payload, { headers: this.headers })
  }

  codeGeneration(instruction) {
    const payload = {
      'instruction': instruction
    };

    return axios.post(this.rootURL + '/' + 'code-generation', payload, { headers: this.headers })
  }

  dependencies(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'dependencies', payload, { headers: this.headers })
  }

  embeddings(sentences) {
    const payload = {
      'sentences': sentences
    };

    return axios.post(this.rootURL + '/' + 'embeddings', payload, { headers: this.headers })
  }

  entities(text, searchedEntity = null) {
    const payload = {
      'text': text,
      'searched_entity': searchedEntity
    };

    return axios.post(this.rootURL + '/' + 'entities', payload, { headers: this.headers })
  }

  generation(text, maxLength = null, lengthNoInput = null,
    endSequence = null, removeInput = null, numBeams = null,
    numReturnSequences = null, topK = null, topP = null,
    temperature = null, repetitionPenalty = null, badWords = null, 
    removeEndSequence = null) {
    const payload = {
      'text': text,
      'max_length': maxLength,
      'length_no_input': lengthNoInput,
      'end_sequence': endSequence,
      'remove_input': removeInput,
      'num_beams': numBeams,
      'num_return_sequences': numReturnSequences,
      'top_k': topK,
      'top_p': topP,
      'temperature': temperature,
      'repetition_penalty': repetitionPenalty,
      'bad_words': badWords,
      'remove_end_sequence': removeEndSequence
    };

    return axios.post(this.rootURL + '/' + 'generation', payload, { headers: this.headers })
  }

  gsCorrection(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'gs-correction', payload, { headers: this.headers })
  }

  imageGeneration(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'image-generation', payload, { headers: this.headers })
  }

  intentClassification(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'intent-classification', payload, { headers: this.headers })
  }

  kwKpExtraction(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'kw-kp-extraction', payload, { headers: this.headers })
  }

  langdetection(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'langdetection', payload, { headers: this.headers })
  }


  libVersions() {
    return axios.get(this.rootURL + '/' + 'versions', { headers: this.headers })
  }

  paraphrasing(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'paraphrasing', payload, { headers: this.headers })
  }

  question(question, context = null) {
    const payload = {
      'question': question,
      'context': context
    };

    return axios.post(this.rootURL + '/' + 'question', payload, { headers: this.headers })
  }

  semanticSearch(text, numResults = null) {
    const payload = {
      'text': text,
      'num_results': numResults
    };

    return axios.post(this.rootURL + '/' + 'semantic-search', payload, { headers: this.headers })
  }

  semanticSimilarity(sentences) {
    const payload = {
      'sentences': sentences
    };

    return axios.post(this.rootURL + '/' + 'semantic-similarity', payload, { headers: this.headers })
  }

  sentenceDependencies(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'sentence-dependencies', payload, { headers: this.headers })
  }

  sentiment(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'sentiment', payload, { headers: this.headers })
  }

  speechSynthesis(text, voice = null) {
    const payload = {
      'text': text,
      'voice': voice
    };

    return axios.post(this.rootURL + '/' + 'speech-synthesis', payload, { headers: this.headers })
  }

  summarization(text, size = null) {
    const payload = {
      'text': text,
      'size': size
    };

    return axios.post(this.rootURL + '/' + 'summarization', payload, { headers: this.headers })
  }

  tokens(text) {
    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'tokens', payload, { headers: this.headers })
  }

  translation(text, source, target) {
    const payload = {
      'text': text,
      'source': source,
      'target': target
    };

    return axios.post(this.rootURL + '/' + 'translation', payload, { headers: this.headers })
  }

}

module.exports = Client
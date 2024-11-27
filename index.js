const axios = require('axios')

const BASE_URL = 'https://api.nlpcloud.io'
const API_VERSION = 'v1'

class Client {
  constructor(params) {
    var model = params.model
    var token = params.token
    var gpu = params.gpu ?? false
    var lang = params.lang ?? ''
    var async = params.async ?? false

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

    if (async) {
      this.rootURL += "async/"
    }

    if (lang != '') {
      this.rootURL += lang + '/'
    }

    this.rootURL += model
  }


  adGeneration(params) {
    var keywords = params.keywords

    const payload = {
      'keywords': keywords
    };

    return axios.post(this.rootURL + '/' + 'ad-generation', payload, { headers: this.headers })
  }

  asr(params) {
    var url = params.url ?? null
    var encodedFile = params.encodedFile ?? null
    var inputLanguage = params.inputLanguage ?? null

    const payload = {
      'url': url,
      'encoded_file': encodedFile,
      'input_language': inputLanguage
    };

    return axios.post(this.rootURL + '/' + 'asr', payload, { headers: this.headers })
  }

  asyncResult(params) {
    var url = params.url

    return axios.get(url, { headers: this.headers })
  }

  chatbot(params) {
    var input = params.input
    var context = params.context ?? null
    var history = params.history ?? null

    const payload = {
      'input': input,
      'context': context,
      'history': history
    };

    return axios.post(this.rootURL + '/' + 'chatbot', payload, { headers: this.headers })
  }

  classification(params) {
    var text = params.text
    var labels = params.labels ?? null
    var multiClass = params.multiClass ?? null

    const payload = {
      'text': text,
      'labels': labels,
      'multi_class': multiClass
    };

    return axios.post(this.rootURL + '/' + 'classification', payload, { headers: this.headers })
  }

  codeGeneration(params) {
    var instruction = params.instruction

    const payload = {
      'instruction': instruction
    };

    return axios.post(this.rootURL + '/' + 'code-generation', payload, { headers: this.headers })
  }

  dependencies(params) {
    var text = params.text

    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'dependencies', payload, { headers: this.headers })
  }

  embeddings(params) {
    var sentences = params.sentences

    const payload = {
      'sentences': sentences
    };

    return axios.post(this.rootURL + '/' + 'embeddings', payload, { headers: this.headers })
  }

  entities(params) {
    var text = params.text
    var searchedEntity = params.searchedEntity ?? null

    const payload = {
      'text': text,
      'searched_entity': searchedEntity
    };

    return axios.post(this.rootURL + '/' + 'entities', payload, { headers: this.headers })
  }

  generation(params) {
    var text = params.text
    var maxLength = params.maxLength ?? null
    var lengthNoInput = params.lengthNoInput ?? null
    var endSequence = params.endSequence ?? null
    var removeInput = params.removeInput ?? null
    var numBeams = params.numBeams ?? null
    var numReturnSequences = params.numReturnSequences ?? null
    var topK = params.topK ?? null
    var topP = params.topP ?? null
    var temperature = params.temperature ?? null
    var repetitionPenalty = params.repetitionPenalty ?? null
    var badWords = params.badWords ?? null
    var removeEndSequence = params.removeEndSequence ?? null

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

  gsCorrection(params) {
    var text = params.text

    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'gs-correction', payload, { headers: this.headers })
  }

  imageGeneration(params) {
    var text = params.text

    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'image-generation', payload, { headers: this.headers })
  }

  intentClassification(params) {
    var text = params.text

    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'intent-classification', payload, { headers: this.headers })
  }

  kwKpExtraction(params) {
    var text = params.text

    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'kw-kp-extraction', payload, { headers: this.headers })
  }

  langdetection(params) {
    var text = params.text

    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'langdetection', payload, { headers: this.headers })
  }

  paraphrasing(params) {
    var text = params.text

    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'paraphrasing', payload, { headers: this.headers })
  }

  question(params) {
    var question = params.question
    var context = params.context ?? null

    const payload = {
      'question': question,
      'context': context
    };

    return axios.post(this.rootURL + '/' + 'question', payload, { headers: this.headers })
  }

  semanticSearch(params) {
    var text = params.text
    var numResults = params.numResults ?? null

    const payload = {
      'text': text,
      'num_results': numResults
    };

    return axios.post(this.rootURL + '/' + 'semantic-search', payload, { headers: this.headers })
  }

  semanticSimilarity(params) {
    var sentences  = params.sentences

    const payload = {
      'sentences': sentences
    };

    return axios.post(this.rootURL + '/' + 'semantic-similarity', payload, { headers: this.headers })
  }

  sentenceDependencies(params) {
    var text = params.text

    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'sentence-dependencies', payload, { headers: this.headers })
  }

  sentiment(params) {
    var text = params.text
    var target = params.target ?? null
    const payload = {
      'text': text,
      'target': target
    };

    return axios.post(this.rootURL + '/' + 'sentiment', payload, { headers: this.headers })
  }

  speechSynthesis(text, voice = null) {
    var text = params.text
    var voice = params.voice ?? null

    const payload = {
      'text': text,
      'voice': voice
    };

    return axios.post(this.rootURL + '/' + 'speech-synthesis', payload, { headers: this.headers })
  }

  summarization(params) {
    var text = params.text
    var size = params.size ?? null

    const payload = {
      'text': text,
      'size': size
    };

    return axios.post(this.rootURL + '/' + 'summarization', payload, { headers: this.headers })
  }

  tokens(params) {
    var text = params.text

    const payload = {
      'text': text
    };

    return axios.post(this.rootURL + '/' + 'tokens', payload, { headers: this.headers })
  }

  translation(params) {
    var text = params.text
    var source = params.source ?? null
    var target = params.target

    const payload = {
      'text': text,
      'source': source,
      'target': target
    };

    return axios.post(this.rootURL + '/' + 'translation', payload, { headers: this.headers })
  }

}

module.exports = Client
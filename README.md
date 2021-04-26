# Node.js Client For NLP Cloud

This is a Node.js client for the NLP Cloud API: https://docs.nlpcloud.io

NLP Cloud serves high performance pre-trained models for NER, sentiment-analysis, classification, summarization, question answering, and POS tagging, ready for production, served through a REST API. 

Pre-trained models are the spaCy models and some transformers-based models from Hugging Face. You can also deploy your own transformers-based models, or spaCy models.

If you face an issue, don't hesitate to raise it as a Github issue. Thanks!

## Installation

Install via npm.

```shell
npm install nlpcloud --save
```

## Returned Objects

All objects returned by the library are [Axios](https://github.com/axios/axios) promises.

In case of success, results are contained in `response.data`. In case of failure, you can retrieve the status code in `err.response.status` and the error message in `err.response.data.detail`.

## Examples

Here is a full example that performs Named Entity Recognition (NER) using spaCy's `en_core_web_lg` model, with a fake token:

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient('en_core_web_lg','4eC39HqLyjWDarjtT1zdp7dc')

client.entities("John Doe is a Go Developer at Google")
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (err) {
    console.error(err.response.status);
    console.error(err.response.data.detail);
  });
```

And a full example that uses your own custom model `7894`:

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient('custom_model/7894','4eC39HqLyjWDarjtT1zdp7dc')

client.entities("John Doe is a Go Developer at Google")
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (err) {
    console.error(err.response.status);
    console.error(err.response.data.detail);
  });
```

A json object is returned. Here is what it could look like:

```json
[
  {
    "end": 8,
    "start": 0,
    "text": "John Doe",
    "type": "PERSON"
  },
  {
    "end": 25,
    "start": 13,
    "text": "Go Developer",
    "type": "POSITION"
  },
  {
    "end": 35,
    "start": 30,
    "text": "Google",
    "type": "ORG"
  },
]
```

## Usage

### Client Initialization

Pass the model you want to use and the NLP Cloud token to the client during initialization.

The model can either be a pretrained model like `en_core_web_lg`, `bart-large-mnli`... but also one of your custom transformers-based models, or spaCy models, using `custom_model/<model id>` (e.g. `custom_model/2568`).

Your token can be retrieved from your [NLP Cloud dashboard](https://nlpcloud.io/home/token).

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient('en_core_web_sm','4eC39HqLyjWDarjtT1zdp7dc')
```

### Entities Endpoint

Call the `entities()` method and pass the text you want to perform named entity recognition (NER) on.

```js
client.entities("<Your block of text>")
```

### Classification Endpoint

Call the `classification()` method and pass 3 arguments:

1. The text you want to classify, as a string
1. The candidate labels for your text, as an array of strings
1. Whether the classification should be multi-class or not, as a boolean

```js
client.classification("<Your block of text>", ["label 1", "label 2", "..."], true|false)
```

### Sentiment Analysis Endpoint

Call the `sentiment()` method and pass the text you want to analyze the sentiment of:

```js
client.sentiment("<Your block of text>")
```

### Question Answering Endpoint

Call the `question()` method and pass the following:

1. A context that the model will use to try to answer your question
1. Your question

```js
client.question("<Your context>", "<Your question>")
```

### Summarization Endpoint

Call the `summarization()` method and pass the text you want to summarize.

**Note that your block of text should not exceed 1024 words, otherwise you will get an error. Also note that this model works best for blocks of text between 56 and 142 words.**

```js
client.summarization("<Your text to summarize>")
```

### Dependencies Endpoint

Call the `dependencies()` method and pass the text you want to perform part of speech tagging (POS) + arcs on.

```js
client.dependencies("<Your block of text>")
```

### Sentence Dependencies Endpoint

Call the `sentenceDependencies()` method and pass a block of text made up of several sentencies you want to perform POS + arcs on.

```js
client.sentenceDependencies("<Your block of text>")
```

### Library Versions Endpoint

Call the `libVersions()` method to know the versions of the libraries used behind the hood with the model (for example the PyTorch, TensorFlow, or spaCy version used).

```js
client.libVersions()
```


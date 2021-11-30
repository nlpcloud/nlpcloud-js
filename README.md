# Node.js Client For NLP Cloud

This is the Node.js client for the [NLP Cloud](https://nlpcloud.io) API. See the [documentation](https://docs.nlpcloud.io) for more details.

NLP Cloud serves high performance pre-trained for NER, sentiment-analysis, classification, summarization, text generation, question answering, machine translation, language detection, tokenization, lemmatization, POS tagging, and dependency parsing. It is ready for production, served through a REST API.

You can either use the NLP Cloud pre-trained models, fine-tune your own models, or deploy your own models.

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

The model can either be a pretrained model like `en_core_web_lg`, `bart-large-mnli`... but also one of your custom models, using `custom_model/<model id>` (e.g. `custom_model/2568`).

Your token can be retrieved from your [NLP Cloud dashboard](https://nlpcloud.io/home/token).

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient('<model>','<your token>')
```

If you want to use a GPU, pass `gpu = true`.

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient("<model>", "<your token>", gpu = true)
```

### Entities Endpoint

Call the `entities()` method and pass the text you want to perform named entity recognition (NER) on.

```js
client.entities("<Your block of text>")
```

### Classification Endpoint

Call the `classification()` method and pass the following arguments:

1. The text you want to classify, as a string
1. The candidate labels for your text, as an array of strings
1. (Optional) `multi_class` Whether the classification should be multi-class or not, as a boolean

```js
client.classification("<Your block of text>", ["label 1", "label 2", "..."])
```

### Text Generation Endpoint

Call the `generation()` method and pass the following arguments:

1. The block of text that starts the generated text, as a string. 1200 tokens maximum.
1. (Optional) `minLength`: The minimum number of tokens that the generated text should contain, as an integer. The size of the generated text should not exceed 256 tokens on a CPU plan and 1024 tokens on GPU plan. If `lengthNoInput` is false, the size of the generated text is the difference between `minLength` and the length of your input text. If `lengthNoInput` is true, the size of the generated text simply is `minLength`. Defaults to 10.
1. (Optional) `maxLength`: The maximum number of tokens that the generated text should contain, as an integer. The size of the generated text should not exceed 256 tokens on a CPU plan and 1024 tokens on GPU plan. If `lengthNoInput` is false, the size of the generated text is the difference between `maxLength` and the length of your input text. If `lengthNoInput` is true, the size of the generated text simply is `maxLength`. Defaults to 50.
1. (Optional) `lengthNoInput`: Whether `minLength` and `maxLength` should not include the length of the input text, as a boolean. If false, `minLength` and `maxLength` include the length of the input text. If true, min_length and `maxLength` don't include the length of the input text. Defaults to false.
1. (Optional) `endSequence`: A specific token that should be the end of the generated sequence, as a string. For example if could be `.` or `\n` or `###` or anything else below 10 characters.
1. (Optional) `removeInput`: Whether you want to remove the input text form the result, as a boolean. Defaults to false.
1. (Optional) `doSample`: Whether or not to use sampling ; use greedy decoding otherwise, as a boolean. Defaults to true.
1. (Optional) `numBeams`: Number of beams for beam search. 1 means no beam search. This is an integer. Defaults to 1.
1. (Optional) `earlyStopping`: Whether to stop the beam search when at least num_beams sentences are finished per batch or not, as a boolean. Defaults to false.
1. (Optional) `noRepeatNgramSize`: If set to int > 0, all ngrams of that size can only occur once. This is an integer. Defaults to 0.
1. (Optional) `numReturnSequences`: The number of independently computed returned sequences for each element in the batch, as an integer. Defaults to 1.
1. (Optional) `topK`: The number of highest probability vocabulary tokens to keep for top-k-filtering, as an integer. Maximum 1000 tokens. Defaults to 0.
1. (Optional) `topP`: If set to float < 1, only the most probable tokens with probabilities that add up to top_p or higher are kept for generation. This is a float. Should be between 0 and 1. Defaults to 0.7.
1. (Optional) `temperature`: The value used to module the next token probabilities, as a float. Should be between 0 and 1. Defaults to 1.
1. (Optional) `repetitionPenalty`: The parameter for repetition penalty, as a float. 1.0 means no penalty. Defaults to 1.0.
1. (Optional) `lengthPenalty`: Exponential penalty to the length, as a float. 1.0 means no penalty. Set to values < 1.0 in order to encourage the model to generate shorter sequences, or to a value > 1.0 in order to encourage the model to produce longer sequences. Defaults to 1.0.
1. (Optional) `badWords`: List of tokens that are not allowed to be generated, as a list of strings. Defaults to null.


```js
client.generation("<Your input text>")
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

```js
client.summarization("<Your text to summarize>")
```

### Translation Endpoint

Call the `translation()` method and pass the text you want to translate.

```js
client.translation("<Your text to translate>")
```

### Language Detection Endpoint

Call the `langdetection()` method and pass the text you want to analyze in order to detect the languages.

```js
client.langdetection("<The text you want to analyze>")
```

### Tokenization Endpoint

Call the `tokens()` method and pass the text you want to tokenize.

```js
client.tokens("<Your block of text>")
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


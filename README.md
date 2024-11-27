# Node.js Client For NLP Cloud

This is the Node.js client (with Typescript types) for the [NLP Cloud](https://nlpcloud.com) API. See the [documentation](https://docs.nlpcloud.com) for more details.

NLP Cloud serves high performance pre-trained or custom models for NER, sentiment-analysis, classification, summarization, dialogue summarization, paraphrasing, intent classification, product description and ad generation, chatbot, grammar and spelling correction, keywords and keyphrases extraction, text generation, image generation, text generation, question answering, automatic speech recognition, machine translation, language detection, semantic search, semantic similarity, tokenization, POS tagging, embeddings, and dependency parsing. It is ready for production, served through a REST API.

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

Here is a full example that summarizes a text using Facebook's Bart Large CNN model, with a fake token:

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient({model:'bart-large-cnn', token:'4eC39HqLyjWDarjtT1zdp7dc'})

client.summarization(`One month after the United States began what has become a 
  troubled rollout of a national COVID vaccination campaign, the effort is finally 
  gathering real steam. Close to a million doses -- over 951,000, to be more exact -- 
  made their way into the arms of Americans in the past 24 hours, the U.S. Centers 
  for Disease Control and Prevention reported Wednesday. That s the largest number 
  of shots given in one day since the rollout began and a big jump from the 
  previous day, when just under 340,000 doses were given, CBS News reported. 
  That number is likely to jump quickly after the federal government on Tuesday 
  gave states the OK to vaccinate anyone over 65 and said it would release all 
  the doses of vaccine it has available for distribution. Meanwhile, a number 
  of states have now opened mass vaccination sites in an effort to get larger 
  numbers of people inoculated, CBS News reported.`)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (err) {
    console.error(err.response.status);
    console.error(err.response.data.detail);
  });
```

Here is a full example that does the same thing, but on a GPU:

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient({model:'bart-large-cnn', token:'4eC39HqLyjWDarjtT1zdp7dc'}, true)

client.summarization(`One month after the United States began what has become a 
  troubled rollout of a national COVID vaccination campaign, the effort is finally 
  gathering real steam. Close to a million doses -- over 951,000, to be more exact -- 
  made their way into the arms of Americans in the past 24 hours, the U.S. Centers 
  for Disease Control and Prevention reported Wednesday. That s the largest number 
  of shots given in one day since the rollout began and a big jump from the 
  previous day, when just under 340,000 doses were given, CBS News reported. 
  That number is likely to jump quickly after the federal government on Tuesday 
  gave states the OK to vaccinate anyone over 65 and said it would release all 
  the doses of vaccine it has available for distribution. Meanwhile, a number 
  of states have now opened mass vaccination sites in an effort to get larger 
  numbers of people inoculated, CBS News reported.`)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (err) {
    console.error(err.response.status);
    console.error(err.response.data.detail);
  });
```

Here is a full example that does the same thing, but on a French text:

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient({model:'bart-large-cnn', token:'4eC39HqLyjWDarjtT1zdp7dc', gpu:true, lang:'fra_Latn'})

client.summarization(`Sur des images aériennes, prises la veille par un vol de surveillance 
  de la Nouvelle-Zélande, la côte d’une île est bordée d’arbres passés du vert 
  au gris sous l’effet des retombées volcaniques. On y voit aussi des immeubles
  endommagés côtoyer des bâtiments intacts. « D’après le peu d’informations
  dont nous disposons, l’échelle de la dévastation pourrait être immense, 
  spécialement pour les îles les plus isolées », avait déclaré plus tôt 
  Katie Greenwood, de la Fédération internationale des sociétés de la Croix-Rouge.
  Selon l’Organisation mondiale de la santé (OMS), une centaine de maisons ont
  été endommagées, dont cinquante ont été détruites sur l’île principale de
  Tonga, Tongatapu. La police locale, citée par les autorités néo-zélandaises,
  a également fait état de deux morts, dont une Britannique âgée de 50 ans,
  Angela Glover, emportée par le tsunami après avoir essayé de sauver les chiens
  de son refuge, selon sa famille.`)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (err) {
    console.error(err.response.status);
    console.error(err.response.data.detail);
  });
```

A JSON object is returned:

```json
{
  "summary_text": "Over 951,000 doses were given in the past 24 hours. That's the largest number of shots given in one day since the  rollout began. That number is likely to jump quickly after the federal government gave states the OK to vaccinate anyone over 65. A number of states have now opened mass vaccination sites."
}
```

## Usage

### Client Initialization

Pass the model you want to use and the NLP Cloud token to the client during initialization.

The model can either be a pretrained model like `en_core_web_lg`, `bart-large-mnli`... but also one of your custom models, using `custom_model/<model id>` (e.g. `custom_model/2568`).

Your token can be retrieved from your [NLP Cloud dashboard](https://nlpcloud.com/home/token).

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient({model:'<model>', token:'<your token>'})
```

If you want to use a GPU, pass `true` as the gpu argument.

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient({model:'<model>', token:'<your token>', gpu:true})
```

If you want to use the multilingual add-on in order to process non-English texts, set `'<your language code>'` as the lang argument. For example, if you want to process French text, you should set `lang:'fra_Latn'`.

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient({model:'<model>', token:'<your token>', lang:'<your language code>'})
```

If you want to make asynchronous requests, pass `true` as the async argument.

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient({model:'<model>', token:'<your token>', async:true)
```

If you are making asynchronous requests, you will always receive a quick response containing a URL. You should then poll this URL with `asyncResult()` on a regular basis (every 10 seconds for example) in order to check if the result is available. Here is an example:

```js
client.asyncResult('https://api.nlpcloud.io/v1/get-async-result/21718218-42e8-4be9-a67f-b7e18e03b436')
```

The above returns an object is the response is available. It returns an empty response otherwise (`null`).

### Automatic Speech Recognition (Speech to Text) Endpoint

Call the `asr()` method and pass the following arguments:

1. (Optional: either this or the encoded file should be set) `url`: a URL where your audio or video file is hosted
1. (Optional: either this or the url should be set) `encodedFile`: a base 64 encoded version of your file
1. (Optional) `inputLanguage`: the language of your file as ISO code

```js
client.asr({url:'Your url'})
```

### Chatbot Endpoint

Call the `chatbot()` method and pass the following arguments:

1. Your input
1. (Optional) `context` A general context about the conversation
1. (Optional) `history` The history of your previous exchanges with the model

```js
client.chatbot({text:'<Your input>'})
```

### Classification Endpoint

Call the `classification()` method and pass the following arguments:

1. The text you want to classify, as a string
1. The candidate labels for your text, as an array of strings
1. (Optional) `multiClass` Whether the classification should be multi-class or not, as a boolean

```js
client.classification({text:'<Your block of text>', labels:['label 1', 'label 2', ...]})
```

### Code Generation Endpoint

Call the `codeGeneration()` method and pass the instruction for the code you want to generate.

```js
client.codeGeneration({instruction:'<Your instruction>'})
```

### Dependencies Endpoint

Call the `dependencies()` method and pass the text you want to perform part of speech tagging (POS) + arcs on.

```js
client.dependencies({text:'<Your block of text>'})
```

### Embeddings Endpoint

Call the `embeddings()` method and pass an array of blocks of text that you want to extract embeddings from.

```js
client.embeddings({sentences:['<Text 1>', '<Text 2>', '<Text 3>', ...]})
```

The above command returns a JSON object.

### Entities Endpoint

Call the `entities()` method and pass the text you want to perform named entity recognition (NER) on.

```js
client.entities({text:'<Your block of text>'})
```

### Generation Endpoint

Call the `generation()` method and pass the following arguments:

1. The block of text that starts the generated text. 256 tokens maximum for GPT-J on CPU, 1024 tokens maximum for GPT-J and GPT-NeoX 20B on GPU, and 2048 tokens maximum for Fast GPT-J and Finetuned GPT-NeoX 20B on GPU.
1. (Optional) `maxLength`: Optional. The maximum number of tokens that the generated text should contain. 256 tokens maximum for GPT-J on CPU, 1024 tokens maximum for GPT-J and GPT-NeoX 20B on GPU, and 2048 tokens maximum for Fast GPT-J and Finetuned GPT-NeoX 20B on GPU. If `lengthNoInput` is false, the size of the generated text is the difference between `maxLength` and the length of your input text. If `lengthNoInput` is true, the size of the generated text simply is `maxLength`. Defaults to 50.
1. (Optional) `lengthNoInput`: Whether `minLength` and `maxLength` should not include the length of the input text, as a boolean. If false, `minLength` and `maxLength` include the length of the input text. If true, min_length and `maxLength` don't include the length of the input text. Defaults to false.
1. (Optional) `endSequence`: A specific token that should be the end of the generated sequence, as a string. For example if could be `.` or `\n` or `###` or anything else below 10 characters.
1. (Optional) `removeInput`: Whether you want to remove the input text form the result, as a boolean. Defaults to false.
1. (Optional) `numBeams`: Number of beams for beam search. 1 means no beam search. This is an integer. Defaults to 1.
1. (Optional) `numReturnSequences`: The number of independently computed returned sequences for each element in the batch, as an integer. Defaults to 1.
1. (Optional) `topK`: The number of highest probability vocabulary tokens to keep for top-k-filtering, as an integer. Maximum 1000 tokens. Defaults to 0.
1. (Optional) `topP`: If set to float < 1, only the most probable tokens with probabilities that add up to top_p or higher are kept for generation. This is a float. Should be between 0 and 1. Defaults to 0.7.
1. (Optional) `temperature`: The value used to module the next token probabilities, as a float. Should be between 0 and 1. Defaults to 1.
1. (Optional) `repetitionPenalty`: The parameter for repetition penalty, as a float. 1.0 means no penalty. Defaults to 1.0.
1. (Optional) `badWords`: List of tokens that are not allowed to be generated, as a list of strings. Defaults to null.
1. (Optional) `removeEndSequence`: Optional. Whether you want to remove the `endSequence` string from the result. Defaults to false.

```js
client.generation({text:'<Your input text>'})
```

### Grammar and Spelling Correction Endpoint

Call the `gsCorrection()` method and pass the text you want to correct.

```js
client.gsCorrection({text:'<The text you want to correct>'})
```

### Image Generation Endpoint

Call the `imageGeneration()` method and pass the text you want to use to generate your image.

```js
client.imageGeneration({text:'<Your text instruction>'})
```

### Intent Classification Endpoint

Call the `intentClassification()` method and pass the text you want to analyze in order to detect the intent.

```js
client.intentClassification({text:'<The text you want to analyze>'})
```

### Keywords and Keyphrases Extraction Endpoint

Call the `kwKpExtraction()` method and pass the text you want to extract keywords and keyphrases from.

```js
client.kwKpExtraction({text:'<The text you want to analyze>'})
```

### Language Detection Endpoint

Call the `langdetection()` method and pass the text you want to analyze in order to detect the languages.

```js
client.langdetection({text:'<The text you want to analyze>'})
```

### Question Answering Endpoint

Call the `question()` method and pass the following:

1. Your question
1. (Optional) A context that the model will use to try to answer your question

```js
client.question({question:'<Your question>', context:'<Your context>'})
```

### Semantic Search Endpoint

Call the `semanticSearch()` method and pass your search query.

```python
client.semanticSearch('Your search query')
```

The above command returns a JSON object.

### Semantic Similarity Endpoint

Call the `semanticSimilarity()` method and pass an array made up of 2 blocks of text that you want to compare.

```python
client.semanticSimilarity({sentences:['<Block of text 1>', '<Block of text 2>']})
```

The above command returns a JSON object.

### Sentence Dependencies Endpoint

Call the `sentenceDependencies()` method and pass a block of text made up of several sentences you want to perform POS + arcs on.

```js
client.sentenceDependencies({text:'<Your block of text>'})
```

### Sentiment Analysis Endpoint

Call the `sentiment()` method and pass the following:

1. The text you want to get the sentiment of
1. (Optional) The target element that the sentiment should apply to

```js
client.sentiment({text:'<Your block of text>', target:'<Your target>'})
```

### Speech Synthesis Endpoint

Call the `speechSynthesis()` method and pass the text you want to convert to audio:

```js
client.speechSynthesis({text:"<Your block of text>"})
```

The above command returns a JSON object.

### Summarization Endpoint

Call the `summarization()` method and pass the text you want to summarize.

```js
client.summarization({text:'<Your text to summarize>'})
```

### Paraphrasing Endpoint

Call the `paraphrasing()` method and pass the text you want to paraphrase.

```js
client.paraphrasing({text:'<Your text to paraphrase>'})
```

### Tokenization Endpoint

Call the `tokens()` method and pass the text you want to tokenize.

```js
client.tokens({text:'<Your block of text>'})
```

### Translation Endpoint

Call the `translation()` method and pass the text you want to translate.

```js
client.translation({text:'<Your text to translate>'})
```

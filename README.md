# Node.js Client For NLP Cloud

This is the Node.js client (with Typescript types) for the [NLP Cloud](https://nlpcloud.io) API. See the [documentation](https://docs.nlpcloud.io) for more details.

NLP Cloud serves high performance pre-trained or custom models for NER, sentiment-analysis, classification, summarization, dialogue summarization, paraphrasing, intent classification, product description and ad generation, chatbot, grammar and spelling correction, keywords and keyphrases extraction, text generation, image generation, blog post generation, text generation, question answering, automatic speech recognition, machine translation, language detection, semantic search, semantic similarity, tokenization, POS tagging, embeddings, and dependency parsing. It is ready for production, served through a REST API.

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

const client = new NLPCloudClient('bart-large-cnn','4eC39HqLyjWDarjtT1zdp7dc')

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

const client = new NLPCloudClient('bart-large-cnn','4eC39HqLyjWDarjtT1zdp7dc', true)

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

const client = new NLPCloudClient('bart-large-cnn','4eC39HqLyjWDarjtT1zdp7dc', true, 'fr')

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

Your token can be retrieved from your [NLP Cloud dashboard](https://nlpcloud.io/home/token).

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient('<model>','<your token>')
```

If you want to use a GPU, pass `true` as the 3rd argument.

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient('<model>', '<your token>', true)
```

If you want to use the multilingual add-on in order to process non-English texts, set `lang='<your language code>'` as the 4th argument. For example, if you want to process French text, you should set `lang='fr'` as the 4th argument.

```js
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient('<model>', '<your token>', false, '<your language code>')
```

### Ad Generation and Product Description Generation Endpoint

Call the `adGeneration()` method and pass the keywords you want to use to generate your ad or product description.

```js
client.adGeneration(["keyword 1", "keyword 2", ...])
```

### Automatic Speech Recognition (Speech to Text) Endpoint

Call the `asr()` method and pass the url that hosts your audio or video file.

```js
client.asr("Your url")
```

### Blog Post Generation Endpoint

Call the `articleGeneration()` method and pass the title of the article you want to generate.

```js
client.articleGeneration("<Your title>")
```

### Chatbot Endpoint

Call the `chatbot()` method and pass the following arguments:

1. Your input
1. (Optional) `context` A general context about the conversation
1. (Optional) `history` The history of your previous exchanges with the model

```js
client.chatbot("<Your input>")
```

### Classification Endpoint

Call the `classification()` method and pass the following arguments:

1. The text you want to classify, as a string
1. The candidate labels for your text, as an array of strings
1. (Optional) `multiClass` Whether the classification should be multi-class or not, as a boolean

```js
client.classification("<Your block of text>", ["label 1", "label 2", ...])
```

### Code Generation Endpoint

Call the `codeGeneration()` method and pass the instruction for the code you want to generate.

```js
client.codeGeneration("<Your instruction>")
```

### Dependencies Endpoint

Call the `dependencies()` method and pass the text you want to perform part of speech tagging (POS) + arcs on.

```js
client.dependencies("<Your block of text>")
```

### Embeddings Endpoint

Call the `embeddings()` method and pass an array of blocks of text that you want to extract embeddings from.

```js
client.embeddings(["<Text 1>", "<Text 2>", "<Text 3>", ...])
```

The above command returns a JSON object.

### Entities Endpoint

Call the `entities()` method and pass the text you want to perform named entity recognition (NER) on.

```js
client.entities("<Your block of text>")
```

### Generation Endpoint

Call the `generation()` method and pass the following arguments:

1. The block of text that starts the generated text. 256 tokens maximum for GPT-J on CPU, 1024 tokens maximum for GPT-J and GPT-NeoX 20B on GPU, and 2048 tokens maximum for Fast GPT-J and Finetuned GPT-NeoX 20B on GPU.
1. (Optional) `minLength`: The minimum number of tokens that the generated text should contain. 256 tokens maximum for GPT-J on CPU, 1024 tokens maximum for GPT-J and GPT-NeoX 20B on GPU, and 2048 tokens maximum for Fast GPT-J and Finetuned GPT-NeoX 20B on GPU.. If `lengthNoInput` is false, the size of the generated text is the difference between `minLength` and the length of your input text. If `lengthNoInput` is true, the size of the generated text simply is `minLength`. Defaults to 10.
1. (Optional) `maxLength`: Optional. The maximum number of tokens that the generated text should contain. 256 tokens maximum for GPT-J on CPU, 1024 tokens maximum for GPT-J and GPT-NeoX 20B on GPU, and 2048 tokens maximum for Fast GPT-J and Finetuned GPT-NeoX 20B on GPU. If `lengthNoInput` is false, the size of the generated text is the difference between `maxLength` and the length of your input text. If `lengthNoInput` is true, the size of the generated text simply is `maxLength`. Defaults to 50.
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
1. (Optional) `removeEndSequence`: Optional. Whether you want to remove the `endSequence` string from the result. Defaults to false.

```js
client.generation("<Your input text>")
```

### Grammar and Spelling Correction Endpoint

Call the `gsCorrection()` method and pass the text you want to correct.

```js
client.gsCorrection("<The text you want to correct>")
```

### Image Generation Endpoint

Call the `imageGeneration()` method and pass the text you want to use to generate your image.

```js
client.imageGeneration("<Your text instruction>")
```

### Intent Classification Endpoint

Call the `intentClassification()` method and pass the text you want to analyze in order to detect the intent.

```js
client.intentClassification("<The text you want to analyze>")
```

### Keywords and Keyphrases Extraction Endpoint

Call the `kwKpExtraction()` method and pass the text you want to extract keywords and keyphrases from.

```js
client.kwKpExtraction("<The text you want to analyze>")
```

### Language Detection Endpoint

Call the `langdetection()` method and pass the text you want to analyze in order to detect the languages.

```js
client.langdetection("<The text you want to analyze>")
```

### Library Versions Endpoint

Call the `libVersions()` method to know the versions of the libraries used behind the hood with the model (for example the PyTorch, TensorFlow, or spaCy version used).

```js
client.libVersions()
```

### Question Answering Endpoint

Call the `question()` method and pass the following:

1. Your question
1. A context that the model will use to try to answer your question

```js
client.question("<Your question>","<Your context>")
```

### Semantic Search Endpoint

Call the `semanticSearch()` method and pass your search query.

```python
client.semanticSearch("Your search query")
```

The above command returns a JSON object.

### Semantic Similarity Endpoint

Call the `semanticSimilarity()` method and pass an array made up of 2 blocks of text that you want to compare.

```python
client.semanticSimilarity(["<Block of text 1>", "<Block of text 2>"])
```

The above command returns a JSON object.

### Sentence Dependencies Endpoint

Call the `sentenceDependencies()` method and pass a block of text made up of several sentences you want to perform POS + arcs on.

```js
client.sentenceDependencies("<Your block of text>")
```

### Sentiment Analysis Endpoint

Call the `sentiment()` method and pass the text you want to analyze the sentiment of:

```js
client.sentiment("<Your block of text>")
```

### Summarization Endpoint

Call the `summarization()` method and pass the text you want to summarize.

```js
client.summarization("<Your text to summarize>")
```

### Paraphrasing Endpoint

Call the `paraphrasing()` method and pass the text you want to paraphrase.

```js
client.paraphrasing("<Your text to paraphrase>")
```

### Tokenization Endpoint

Call the `tokens()` method and pass the text you want to tokenize.

```js
client.tokens("<Your block of text>")
```

### Translation Endpoint

Call the `translation()` method and pass the text you want to translate.

```js
client.translation("<Your text to translate>")
```

export = Client;
declare class Client {
    constructor(model: string, token: string, gpu?: boolean, lang?: string, asynchronous?: boolean);
    headers: {
        Authorization: string;
        'User-Agent': string;
    };
    rootURL: string;

    adGeneration(keywords: string[]): Promise<{
        status: number;
        statusText: string;
        data: {
            generated_text: string;
        };
    }>;
    asr(url?: string, encodedFile?: string, inputLanguage?: string): Promise<{
        status: number;
        statusText: string;
        data: {
            text: string;
            duration: number;
            language: string;
            segments: { id: number, start: number, end: number, text: string }
        };
    } | {
        status: number;
        statusText: string;
        data: {
            url: string;
        }
    }>;
    asyncResult(url: string): Promise<{
        status: number;
        statusText: string;
        data: {
            created_on: string;
            finished_on: string;
            request_body: string;
            http_code: number;
            error_detail: string;
            content: string;
        };
    }>;
    chatbot(input: string, context: string, history: { input: string, response: string }[]): Promise<{
        status: number;
        statusText: string;
        data: {
            response: string;
            history: { input: string, response: string }[];
        };
    }>;
    classification(text: string, labels: string[], multiClass?: boolean): Promise<{
        status: number;
        statusText: string;
        data: {
            labels: string[];
            scores: number[];
        };
    }>;
    codeGeneration(instruction: string): Promise<{
        status: number;
        statusText: string;
        data: {
            generated_code: string;
        };
    }>;
    dependencies(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            words: { text: string, tag: string }[];
        };
    }>;
    embeddings(text: string[]): Promise<{
        status: number;
        statusText: string;
        data: {
            score: number[][];
        };
    }>;
    entities(text: string, searchedEntity?: string): Promise<{
        status: number;
        statusText: string;
        data: {
            entities: { start: number; end: number; type: string; text: string }[];
        };
    }>;
    generation(text: string,
        maxLength?: number,
        lengthNoInput?: boolean,
        endSequence?: string,
        removeInput?: boolean,
        numBeams?: number,
        numReturnSequences?: number,
        topK?: number,
        topP?: number,
        temperature?: number,
        repetitionPenalty?: number,
        removeEndSequence?: boolean): Promise<{
            status: number;
            statusText: string;
            data: {
                generated_text: string;
                nb_input_tokens: number;
                nb_generated_tokens: number;
            };
        }>;
    gsCorrection(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            correction: string;
        };
    } | {
        status: number;
        statusText: string;
        data: {
            url: string;
        }
    }>;
    imageGeneration(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            url: string;
        };
    }>;
    intentClassification(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            intent: string;
        };
    }>;
    kwKpExtraction(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            keywords_and_keyphrases: string[];
        };
    }>;
    langdetection(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            languages: any[];
        };
    }>;
    libVersions(): Promise<{
        status: number;
        statusText: string;
        data: any;
    }>;
    paraphrasing(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            paraphrased_text: string;
        };
    } | {
        status: number;
        statusText: string;
        data: {
            url: string;
        }
    }>;
    question(context: string, question: string): Promise<{
        status: number;
        statusText: string;
        data: {
            answer: string;
            score: number;
            start: number;
            end: number;
        };
    }>;
    semanticSearch(text: string, numResults: number): Promise<{
        status: number;
        statusText: string;
        data: {
            search_results: { score: number, text: string }[];
        };
    }>;
    semanticSimilarity(sentences: string[]): Promise<{
        status: number;
        statusText: string;
        data: {
            score: number;
        };
    }>;
    sentenceDependencies(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            sentence_dependencies: { sentence: string, dependencies: { words: { text: string, tag: string }[], arcs: { start: number, end: number, label: string, text: string, dir: string }[] } }[];
        };
    }>;
    sentiment(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            scored_labels: { label: string, score: number }[];
        };
    }>;
    speechSynthesis(text: string, voice?: string): Promise<{
        status: number;
        statusText: string;
        data: {
            url: string;
        };
    }>;
    summarization(text: string, size?: string): Promise<{
        status: number;
        statusText: string;
        data: {
            summary_text: string;
        };
    } | {
        status: number;
        statusText: string;
        data: {
            url: string;
        }
    }>;
    translation(text: string, source: string, target: string): Promise<{
        status: number;
        statusText: string;
        data: {
            translation_text: string;
        };
    }>;
    tokens(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            tokens: { start: number, end: number, index: number, text: string, lemma: string, ws_after: boolean }[];
        };
    }>;

}

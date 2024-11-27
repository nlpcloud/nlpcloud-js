export = Client;
declare class Client {
    constructor(params: {
        model: string;
        token: string; 
        gpu?: boolean; 
        lang?: string; 
        async?: boolean;
    });
    headers: {
        Authorization: string;
        'User-Agent': string;
    };
    rootURL: string;

    adGeneration(params: {
        keywords: string[]
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            generated_text: string;
        };
    }>;

    asr(params: {
        url?: string, 
        encodedFile?: string, 
        inputLanguage?: string
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            text: string;
            duration: number;
            language: string;
            segments: { id: number, start: number, end: number, text: string }[];
            words: { id: number, start: number, end: number, text: string, prob: number }[];
        };
    } | {
        status: number;
        statusText: string;
        data: {
            url: string;
        }
    }>;

    asyncResult(params: {
        url: string
    }): Promise<{
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
    } | null >;

    chatbot(params: {
        input: string, 
        context?: string, 
        history?: { input: string, response: string }[]
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            response: string;
            history: { input: string, response: string }[];
        };
    }>;

    classification(params: {
        text: string,
        labels?: string[],
        multiClass?: boolean
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            labels: string[];
            scores: number[];
        };
    }>;

    codeGeneration(params: {
        instruction: string
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            generated_code: string;
        };
    }>;

    dependencies(params: {
        text: string
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            words: { text: string, tag: string }[];
        };
    }>;

    embeddings(params: {
        sentences: string[]
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            embeddings: number[][];
        };
    }>;

    entities(params: {
        text: string, 
        searchedEntity?: string
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            entities: { start: number; end: number; type: string; text: string }[];
        };
    }>;

    generation(params: {text: string,
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
        removeEndSequence?: boolean
    }): Promise<{
            status: number;
            statusText: string;
            data: {
                generated_text: string;
                nb_input_tokens: number;
                nb_generated_tokens: number;
            };
        }>;

    gsCorrection(params: {
        text: string
    }): Promise<{
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

    imageGeneration(params: {
        text: string
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            url: string;
        };
    }>;

    intentClassification(params: {
        text: string
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            intent: string;
        };
    }>;

    kwKpExtraction(params: {
        text: string
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            keywords_and_keyphrases: string[];
        };
    }>;

    langdetection(params: {
        text: string
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            languages: any[];
        };
    }>;

    paraphrasing(params: {
        text: string
    }): Promise<{
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

    question(params: {
        context?: string,
        question: string
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            answer: string;
            score: number;
            start: number;
            end: number;
        };
    }>;

    semanticSearch(params: {
        text: string, 
        numResults?: number
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            search_results: { score: number, text: string }[];
        };
    }>;

    semanticSimilarity(params: {
        sentences: string[]
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            score: number;
        };
    }>;

    sentenceDependencies(params: {
        text: string
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            sentence_dependencies: { sentence: string, dependencies: { words: { text: string, tag: string }[], arcs: { start: number, end: number, label: string, text: string, dir: string }[] } }[];
        };
    }>;

    sentiment(params: {
        text: string,
        target?: string
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            scored_labels: { label: string, score: number }[];
        };
    }>;
    speechSynthesis(params: {
        text: string,
        voice?: string
    }): Promise<{
        status: number;
        statusText: string;
        data: {
            url: string;
        };
    }>;

    summarization(params: {
        text: string,
        size?: string
    }): Promise<{
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

    translation(params: {
        text: string, 
        source?: string, 
        target: string
    }): Promise<{
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

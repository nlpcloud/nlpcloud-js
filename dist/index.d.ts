export = Client;
declare class Client {
    constructor(model: string, token: string, gpu?: boolean);
    headers: {
        Authorization: string;
        'User-Agent': string;
    };
    rootURL: string;
    entities(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            entities: { start: number; end: number; type: string; text: string }[];
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
    generation(text: string, minLength?: number, maxLength?: number, lengthNoInput?: boolean, endSequence?: string, removeInput?: boolean, doSample?: boolean, numBeams?: number, earlyStopping?: boolean, noRepeatNgramSize?: number, numReturnSequences?: number, topK?: number, topP?: number, temperature?: number, repetitionPenalty?: number, lengthPenalty?: number, badWords?: string[]): Promise<{
        status: number;
        statusText: string;
        data: {
            generated_text: string;
        };
    }>;;
    sentiment(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            scored_labels: { label: string, score: number }[];
        };
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
    summarization(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            summary_text: string;
        };
    }>;
    translation(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            translation_text: string;
        };
    }>;
    langdetection(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            languages: any[];
        };
    }>;
    tokens(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            tokens: { start: number, end: number, index: number, text: string, lemma: string, ws_after: boolean }[];
        };
    }>;
    dependencies(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            words: { text: string, tag: string }[];
        };
    }>;
    sentenceDependencies(text: string): Promise<{
        status: number;
        statusText: string;
        data: {
            sentence_dependencies: { sentence: string, dependencies: { words: { text: string, tag: string }[], arcs: { start: number, end: number, label: string, text: string, dir: string }[] } }[];
        };
    }>;
    libVersions(): Promise<{
        status: number;
        statusText: string;
        data: any;
    }>;
}

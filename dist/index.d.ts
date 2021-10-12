export = Client;
declare class Client {
    constructor(model: any, token: any, gpu?: boolean);
    headers: {
        Authorization: string;
        'User-Agent': string;
    };
    rootURL: string;
    entities(text: any): any;
    classification(text: any, labels: any, multiClass?: any): any;
    generation(text: any, minLength?: any, maxLength?: any, lengthNoInput?: any, endSequence?: any, removeInput?: any, doSample?: any, numBeams?: any, earlyStopping?: any, noRepeatNgramSize?: any, numReturnSequences?: any, topK?: any, topP?: any, temperature?: any, repetitionPenalty?: any, lengthPenalty?: any, badWords?: any): any;
    sentiment(text: any): any;
    question(context: any, question: any): any;
    summarization(text: any): any;
    translation(text: any): any;
    langdetection(text: any): any;
    tokens(text: any): any;
    dependencies(text: any): any;
    sentenceDependencies(text: any): any;
    libVersions(): any;
}

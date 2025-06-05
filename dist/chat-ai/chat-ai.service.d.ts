import { BaseChatModel } from '@langchain/core/language_models/chat_models';
export declare class ChatAiService {
    private readonly llm;
    constructor(llm: BaseChatModel);
    ask(question: string): Promise<string>;
}

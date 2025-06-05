import { OnModuleInit } from '@nestjs/common';
import { BaseChatModel } from '@langchain/core/language_models/chat_models';
export declare class InteractiveAgentService implements OnModuleInit {
    private readonly llm;
    private agentExecutor;
    private memory;
    constructor(llm: BaseChatModel);
    onModuleInit(): Promise<void>;
    interact(userInput: string): Promise<string>;
}

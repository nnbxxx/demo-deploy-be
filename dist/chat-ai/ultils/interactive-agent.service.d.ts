import { OnModuleInit } from '@nestjs/common';
import { BaseChatModel } from '@langchain/core/language_models/chat_models';
import { GetTimeTool } from '../tools/get-time.tool';
import { SearchProductTool } from '../tools/search-product.tool';
import { SearchVectorDocumentTool } from '../tools/search-vector-document.tool';
import { ResetConversationTool } from '../tools/reset-conversation.tool ';
export declare class InteractiveAgentService implements OnModuleInit {
    private readonly llm;
    private readonly getTimeTool;
    private readonly searchProductTool;
    private readonly searchVectorDocumentTool;
    private readonly resetConversationTool;
    private agentExecutor;
    private memory;
    constructor(llm: BaseChatModel, getTimeTool: GetTimeTool, searchProductTool: SearchProductTool, searchVectorDocumentTool: SearchVectorDocumentTool, resetConversationTool: ResetConversationTool);
    onModuleInit(): Promise<void>;
    interact(userInput: string): Promise<string>;
}

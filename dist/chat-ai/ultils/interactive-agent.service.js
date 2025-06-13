"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractiveAgentService = void 0;
const common_1 = require("@nestjs/common");
const chat_models_1 = require("@langchain/core/language_models/chat_models");
const memory_1 = require("langchain/memory");
const agents_1 = require("langchain/agents");
const interactive_agent_prompt_1 = require("../prompts/interactive-agent.prompt");
const get_time_tool_1 = require("../tools/get-time.tool");
const search_product_tool_1 = require("../tools/search-product.tool");
const search_vector_document_tool_1 = require("../tools/search-vector-document.tool");
const reset_conversation_tool_1 = require("../tools/reset-conversation.tool ");
let InteractiveAgentService = class InteractiveAgentService {
    constructor(llm, getTimeTool, searchProductTool, searchVectorDocumentTool, resetConversationTool) {
        this.llm = llm;
        this.getTimeTool = getTimeTool;
        this.searchProductTool = searchProductTool;
        this.searchVectorDocumentTool = searchVectorDocumentTool;
        this.resetConversationTool = resetConversationTool;
    }
    async onModuleInit() {
        this.memory = new memory_1.BufferMemory({
            returnMessages: true,
            memoryKey: 'chat_history',
            inputKey: 'input',
            outputKey: 'output',
        });
        const prompt = interactive_agent_prompt_1.interactiveAgentPromptTemplate;
        this.resetConversationTool.setMemory(this.memory);
        const tools = [this.getTimeTool, this.searchProductTool, this.searchVectorDocumentTool, this.resetConversationTool];
        const agent = await (0, agents_1.createStructuredChatAgent)({
            llm: this.llm,
            tools,
            prompt,
        });
        this.agentExecutor = new agents_1.AgentExecutor({
            agent,
            tools,
            memory: this.memory,
            verbose: true,
            handleParsingErrors: true,
        });
    }
    async interact(userInput) {
        const response = await this.agentExecutor.invoke({
            input: userInput,
        });
        return response.output;
    }
};
exports.InteractiveAgentService = InteractiveAgentService;
exports.InteractiveAgentService = InteractiveAgentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('GEMINI_CHAT_MODEL')),
    __metadata("design:paramtypes", [chat_models_1.BaseChatModel,
        get_time_tool_1.GetTimeTool,
        search_product_tool_1.SearchProductTool,
        search_vector_document_tool_1.SearchVectorDocumentTool,
        reset_conversation_tool_1.ResetConversationTool])
], InteractiveAgentService);
//# sourceMappingURL=interactive-agent.service.js.map
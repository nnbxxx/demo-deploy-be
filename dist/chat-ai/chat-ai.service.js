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
exports.ChatAiService = void 0;
const common_1 = require("@nestjs/common");
const chat_models_1 = require("@langchain/core/language_models/chat_models");
const messages_1 = require("@langchain/core/messages");
let ChatAiService = class ChatAiService {
    constructor(llm) {
        this.llm = llm;
    }
    async ask(question) {
        const messages = [
            new messages_1.SystemMessage('Bạn là một trợ lý AI thông minh và thân thiện. Hãy trả lời câu hỏi một cách rõ ràng, chi tiết và bằng tiếng Việt.'),
            new messages_1.HumanMessage(question),
        ];
        const response = await this.llm.invoke(messages);
        if (typeof response.content === 'string') {
            return response.content;
        }
        else if (Array.isArray(response.content)) {
            let textContent = '';
            for (const part of response.content) {
                if (part.type === 'text') {
                    textContent += part.text;
                }
            }
            if (textContent) {
                return textContent;
            }
        }
        return "Xin lỗi, tôi không thể xử lý phản hồi hoặc không nhận được nội dung văn bản mong muốn từ AI.";
    }
};
exports.ChatAiService = ChatAiService;
exports.ChatAiService = ChatAiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('GEMINI_CHAT_MODEL')),
    __metadata("design:paramtypes", [chat_models_1.BaseChatModel])
], ChatAiService);
//# sourceMappingURL=chat-ai.service.js.map
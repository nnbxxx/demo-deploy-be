"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiChatProvider = void 0;
const google_genai_1 = require("@langchain/google-genai");
exports.GeminiChatProvider = {
    provide: 'GEMINI_CHAT_MODEL',
    useFactory: () => {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error('GEMINI_API_KEY is not defined in your .env file. Ensure @nestjs/config is set up.');
        }
        return new google_genai_1.ChatGoogleGenerativeAI({
            apiKey: apiKey,
            model: 'gemini-2.5-flash-preview-05-20',
        });
    },
};
//# sourceMappingURL=chat-ai.provider.js.map
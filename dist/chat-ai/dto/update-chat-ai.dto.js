"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChatAiDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_chat_ai_dto_1 = require("./create-chat-ai.dto");
class UpdateChatAiDto extends (0, swagger_1.PartialType)(create_chat_ai_dto_1.CreateChatAiDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateChatAiDto = UpdateChatAiDto;
//# sourceMappingURL=update-chat-ai.dto.js.map
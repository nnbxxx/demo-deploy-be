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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetConversationTool = void 0;
const common_1 = require("@nestjs/common");
const tools_1 = require("langchain/tools");
const zod_1 = require("zod");
let ResetConversationTool = class ResetConversationTool extends tools_1.DynamicStructuredTool {
    setMemory(memory) {
        this.memory = memory;
    }
    constructor() {
        super({
            name: 'reset_conversation',
            description: 'Reset lại cuộc hội thoại ngay lập tức mà không cần xác nhận.',
            schema: zod_1.z.object({}),
            func: async () => {
                if (!this.memory)
                    return 'Không thể reset: memory chưa được khởi tạo.';
                await this.memory.clear();
                return 'Đã reset lại cuộc hội thoại. Bạn có thể bắt đầu cuộc trò chuyện mới.';
            },
        });
        this.name = 'reset_conversation';
        this.description = 'Xóa toàn bộ lịch sử cuộc hội thoại.';
    }
};
exports.ResetConversationTool = ResetConversationTool;
exports.ResetConversationTool = ResetConversationTool = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ResetConversationTool);
//# sourceMappingURL=reset-conversation.tool%20.js.map
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
exports.GetTimeTool = void 0;
const common_1 = require("@nestjs/common");
const tools_1 = require("@langchain/core/tools");
const zod_1 = require("zod");
let GetTimeTool = class GetTimeTool extends tools_1.DynamicStructuredTool {
    constructor() {
        super({
            name: 'get_current_time',
            description: 'Rất hữu ích khi bạn cần biết thời gian hiện tại. Chỉ dùng khi người dùng hỏi cụ thể về "mấy giờ rồi", "giờ hiện tại", "thời gian bây giờ".',
            schema: zod_1.z.object({}),
            func: async () => {
                try {
                    const now = new Date();
                    return `Bây giờ là ${now.toLocaleTimeString('vi-VN', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                    })}`;
                }
                catch (error) {
                    return 'Xin lỗi, tôi không thể lấy được thời gian hiện tại.';
                }
            },
        });
    }
};
exports.GetTimeTool = GetTimeTool;
exports.GetTimeTool = GetTimeTool = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GetTimeTool);
//# sourceMappingURL=get-time.tool.js.map
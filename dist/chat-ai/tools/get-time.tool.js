"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTimeTool = void 0;
const tools_1 = require("@langchain/core/tools");
const zod_1 = require("zod");
exports.GetTimeTool = new tools_1.DynamicStructuredTool({
    name: 'get_current_time',
    description: 'Rất hữu ích khi bạn cần biết thời gian hiện tại. Chỉ dùng khi người dùng hỏi cụ thể về "mấy giờ rồi", "giờ hiện tại", "thời gian bây giờ".',
    schema: zod_1.z.object({}),
    func: async ({}) => {
        try {
            const now = new Date();
            return `Bây giờ là ${now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;
        }
        catch (error) {
            return "Xin lỗi, tôi không thể lấy được thời gian hiện tại.";
        }
    },
});
//# sourceMappingURL=get-time.tool.js.map
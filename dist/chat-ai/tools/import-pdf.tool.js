"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportPDFTool = void 0;
const tools_1 = require("@langchain/core/tools");
const zod_1 = require("zod");
const fs = __importStar(require("fs/promises"));
const pdfParse = __importStar(require("pdf-parse"));
exports.ImportPDFTool = new tools_1.DynamicStructuredTool({
    name: 'import_pdf_tool',
    description: 'Dùng để đọc nội dung file PDF. Sử dụng khi người dùng yêu cầu tóm tắt hoặc đọc nội dung file PDF cụ thể.',
    schema: zod_1.z.object({
        filePath: zod_1.z.string().describe('Đường dẫn đến file PDF'),
    }),
    func: async ({ filePath }) => {
        try {
            const buffer = await fs.readFile(filePath);
            const data = await pdfParse(buffer);
            return `Đã đọc PDF. Nội dung:\n${data.text.slice(0, 1500)}...`;
        }
        catch (err) {
            return 'Không thể đọc PDF. Hãy kiểm tra lại file.';
        }
    },
});
//# sourceMappingURL=import-pdf.tool.js.map
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
exports.SearchVectorDocumentTool = void 0;
const zod_1 = require("zod");
const common_1 = require("@nestjs/common");
const tools_1 = require("langchain/tools");
const vector_store_service_1 = require("../../vector-store/vector-store.service");
let SearchVectorDocumentTool = class SearchVectorDocumentTool extends tools_1.DynamicStructuredTool {
    constructor(vectorStoreService) {
        super({
            name: 'search_vector_document',
            description: 'Tìm kiếm các đoạn văn bản từ tài liệu PDF đã lưu có liên quan đến truy vấn.',
            schema: zod_1.z.object({
                query: zod_1.z.string().describe('Câu hỏi của người dùng cần tìm kiếm trong tài liệu'),
            }),
            func: async ({ query }) => {
                const results = await this.vectorStoreService.searchSimilarDocuments(query, 3);
                if (!results || results.length === 0 || results[0].similarity < 0.75) {
                    return 'Không tìm thấy tài liệu phù hợp.';
                }
                const combined = results
                    .map((r, i) => `Kết quả ${i + 1} (từ "${r.metadata.title}"):\n${r.content}`)
                    .join('\n---\n');
                return `Dưới đây là nội dung liên quan từ tài liệu:\n\n${combined}`;
            },
        });
        this.vectorStoreService = vectorStoreService;
        this.name = 'search_vector_document';
        this.description = 'Tìm kiếm các tài liệu đã lưu trong hệ thống để hỗ trợ trả lời câu hỏi người dùng. (RAG) ';
    }
};
exports.SearchVectorDocumentTool = SearchVectorDocumentTool;
exports.SearchVectorDocumentTool = SearchVectorDocumentTool = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [vector_store_service_1.VectorStoreService])
], SearchVectorDocumentTool);
//# sourceMappingURL=search-vector-document.tool.js.map
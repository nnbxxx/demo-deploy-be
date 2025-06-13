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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatAiController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const path = __importStar(require("path"));
const fs = __importStar(require("fs/promises"));
const vector_store_service_1 = require("../vector-store/vector-store.service");
const interactive_agent_service_1 = require("./ultils/interactive-agent.service");
const customize_1 = require("../decorator/customize");
const swagger_1 = require("@nestjs/swagger");
let ChatAiController = class ChatAiController {
    constructor(vectorStoreService, interactiveAgentService) {
        this.vectorStoreService = vectorStoreService;
        this.interactiveAgentService = interactiveAgentService;
        this.uploadDir = path.join(__dirname, '..', '..', 'uploads');
        fs.mkdir(this.uploadDir, { recursive: true }).catch(console.error);
    }
    async interactWithAgent(question) {
        if (!question?.trim()) {
            throw new common_1.BadRequestException('Query parameter "question" cannot be empty.');
        }
        try {
            const answer = await this.interactiveAgentService.interact(question);
            return { question, answer, timestamp: new Date().toISOString() };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Lỗi xử lý yêu cầu: ${error.message}`);
        }
    }
    async uploadDocument(file, title) {
        if (!file) {
            throw new common_1.BadRequestException('No file uploaded');
        }
        if (!title) {
            throw new common_1.BadRequestException('Title is required');
        }
        try {
            const metadata = await this.vectorStoreService.processPDFAndStoreVector(file.buffer, file.originalname, title);
            return {
                message: 'PDF uploaded and vector stored successfully',
                metadata,
            };
        }
        catch (err) {
            console.error('Upload failed:', err);
            throw new common_1.InternalServerErrorException('Upload failed: ' + err.message);
        }
    }
    async searchDocuments(query) {
        return this.vectorStoreService.searchSimilarDocuments(query);
    }
};
exports.ChatAiController = ChatAiController;
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)('interact'),
    (0, swagger_1.ApiOperation)({ summary: 'Gửi câu hỏi tới Chat AI và nhận câu trả lời' }),
    (0, swagger_1.ApiQuery)({ name: 'question', required: true, description: 'Câu hỏi' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Câu trả lời từ Chat AI' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Query parameter không hợp lệ' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('question')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatAiController.prototype, "interactWithAgent", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Post)('documents'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload file PDF và lưu vector' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
                title: {
                    type: 'string',
                },
            },
            required: ['file', 'title'],
        },
    }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ChatAiController.prototype, "uploadDocument", null);
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOperation)({ summary: 'Tìm kiếm tài liệu gần giống với câu truy vấn' }),
    (0, swagger_1.ApiQuery)({ name: 'query', type: String }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatAiController.prototype, "searchDocuments", null);
exports.ChatAiController = ChatAiController = __decorate([
    (0, swagger_1.ApiTags)('chat-ai'),
    (0, common_1.Controller)('chat-ai'),
    __metadata("design:paramtypes", [vector_store_service_1.VectorStoreService,
        interactive_agent_service_1.InteractiveAgentService])
], ChatAiController);
//# sourceMappingURL=chat-ai.controller.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorStoreService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("@langchain/openai");
const text_splitter_1 = require("langchain/text_splitter");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const pdf_parse_1 = __importDefault(require("pdf-parse"));
const vector_store_schema_1 = require("./schemas/vector-store.schema");
const document_schema_1 = require("./schemas/document.schema");
const util_1 = require("../util/util");
let VectorStoreService = class VectorStoreService {
    constructor(vectorModel, documentModel) {
        this.vectorModel = vectorModel;
        this.documentModel = documentModel;
        this.embeddings = new openai_1.OpenAIEmbeddings();
    }
    async processPDFAndStoreVector(buffer, filename, title) {
        const data = await (0, pdf_parse_1.default)(buffer);
        const text = data.text.trim();
        const splitter = new text_splitter_1.RecursiveCharacterTextSplitter({
            chunkSize: 1000,
            chunkOverlap: 150,
        });
        const docs = await splitter.createDocuments([text]);
        const documentMetadata = {
            filename,
            title,
            chunkCount: docs.length,
            vectorIds: [],
        };
        for (const doc of docs) {
            const embedding = await this.embeddings.embedQuery(doc.pageContent);
            const vectorDoc = {
                content: doc.pageContent,
                embedding,
                metadata: { filename, title },
            };
            const result = await this.vectorModel.create(vectorDoc);
            documentMetadata.vectorIds.push(result.id.toString());
        }
        const newDoc = await this.documentModel.create(documentMetadata);
        return {
            newDoc
        };
    }
    async searchSimilarDocuments(query, topK = 5) {
        const queryEmbedding = await this.embeddings.embedQuery(query);
        const allVectors = await this.vectorModel.find();
        const similarities = allVectors.map(doc => {
            const similarity = (0, util_1.cosineSimilarity)(queryEmbedding, doc.embedding);
            return { doc, similarity };
        });
        const topResults = similarities
            .sort((a, b) => b.similarity - a.similarity)
            .slice(0, topK);
        return topResults.map(result => ({
            content: result.doc.content,
            similarity: result.similarity,
            metadata: result.doc.metadata,
        }));
    }
};
exports.VectorStoreService = VectorStoreService;
exports.VectorStoreService = VectorStoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(vector_store_schema_1.VectorDocument.name)),
    __param(1, (0, mongoose_1.InjectModel)(document_schema_1.Document.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], VectorStoreService);
//# sourceMappingURL=vector-store.service.js.map
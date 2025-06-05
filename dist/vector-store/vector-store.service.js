"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorStoreService = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
const openai_1 = require("@langchain/openai");
const cosine_1 = require("../util/cosine");
let VectorStoreService = class VectorStoreService {
    constructor() {
        this.client = new mongodb_1.MongoClient(process.env.MONGODB_URI);
        this.dbName = 'test';
        this.collectionName = 'vectors';
        this.embeddings = new openai_1.OpenAIEmbeddings();
    }
    async saveVector(text, source, vector) {
        const db = this.client.db(this.dbName);
        const collection = db.collection(this.collectionName);
        await collection.insertOne({ text, source, vector });
    }
    async searchRelevantContent(query, topK = 3) {
        const db = this.client.db(this.dbName);
        const collection = db.collection(this.collectionName);
        const queryVector = await this.embeddings.embedQuery(query);
        const allDocs = await collection.find().toArray();
        const scored = allDocs
            .map(doc => ({
            ...doc,
            score: (0, cosine_1.cosineSimilarity)(queryVector, doc.embedding),
        }))
            .filter(d => d.score > 0.90)
            .sort((a, b) => b.score - a.score)
            .slice(0, topK);
        return scored;
    }
    async clearAll() {
        const db = this.client.db(this.dbName);
        await db.collection(this.collectionName).deleteMany({});
    }
};
exports.VectorStoreService = VectorStoreService;
exports.VectorStoreService = VectorStoreService = __decorate([
    (0, common_1.Injectable)()
], VectorStoreService);
//# sourceMappingURL=vector-store.service.js.map
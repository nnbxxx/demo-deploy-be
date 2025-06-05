export declare class VectorStoreService {
    private client;
    private dbName;
    private collectionName;
    private embeddings;
    saveVector(text: string, source: string, vector: number[]): Promise<void>;
    searchRelevantContent(query: string, topK?: number): Promise<{
        score: number;
        _id: import("bson").ObjectId;
    }[]>;
    clearAll(): Promise<void>;
}

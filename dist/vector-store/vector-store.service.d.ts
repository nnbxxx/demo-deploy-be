import { Model } from 'mongoose';
import { VectorDocument } from './schemas/vector-store.schema';
import { Document } from './schemas/document.schema';
export declare class VectorStoreService {
    private vectorModel;
    private documentModel;
    private embeddings;
    constructor(vectorModel: Model<VectorDocument>, documentModel: Model<Document>);
    processPDFAndStoreVector(buffer: any, filename: any, title: any): Promise<{
        newDoc: import("mongoose").Document<unknown, {}, Document> & Document & Required<{
            _id: unknown;
        }> & {
            __v?: number;
        };
    }>;
    searchSimilarDocuments(query: string, topK?: number): Promise<{
        content: string;
        similarity: number;
        metadata: {
            filename: string;
            title: string;
        };
    }[]>;
}

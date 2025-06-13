import { VectorStoreService } from 'src/vector-store/vector-store.service';
import { InteractiveAgentService } from './ultils/interactive-agent.service';
export declare class ChatAiController {
    private readonly vectorStoreService;
    private readonly interactiveAgentService;
    private readonly uploadDir;
    constructor(vectorStoreService: VectorStoreService, interactiveAgentService: InteractiveAgentService);
    interactWithAgent(question: string): Promise<{
        question: string;
        answer: string;
        timestamp: string;
    }>;
    uploadDocument(file: Express.Multer.File, title: string): Promise<{
        message: string;
        metadata: {
            newDoc: import("mongoose").Document<unknown, {}, import("../vector-store/schemas/document.schema").Document> & import("../vector-store/schemas/document.schema").Document & Required<{
                _id: unknown;
            }> & {
                __v?: number;
            };
        };
    }>;
    searchDocuments(query: string): Promise<{
        content: string;
        similarity: number;
        metadata: {
            filename: string;
            title: string;
        };
    }[]>;
}

import { DynamicStructuredTool } from 'langchain/tools';
import { VectorStoreService } from 'src/vector-store/vector-store.service';
export declare class SearchVectorDocumentTool extends DynamicStructuredTool {
    private readonly vectorStoreService;
    name: string;
    description: string;
    constructor(vectorStoreService: VectorStoreService);
}

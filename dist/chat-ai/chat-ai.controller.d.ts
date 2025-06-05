import { VectorStoreService } from 'src/vector-store/vector-store.service';
import { InteractiveAgentService } from './ultils/interactive-agent.service';
import { ChatAiService } from './chat-ai.service';
export declare class ChatAiController {
    private readonly vectorStoreService;
    private readonly chatAiService;
    private readonly interactiveAgentService;
    private readonly uploadDir;
    private embeddings;
    constructor(vectorStoreService: VectorStoreService, chatAiService: ChatAiService, interactiveAgentService: InteractiveAgentService);
    askTheAgent(question: string): Promise<{
        question: string;
        answer: string;
        timestamp: string;
    }>;
    interactWithAgent(question: string): Promise<{
        question: string;
        answer: string;
        timestamp: string;
    }>;
}

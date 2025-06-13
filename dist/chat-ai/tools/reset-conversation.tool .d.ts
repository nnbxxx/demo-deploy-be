import { DynamicStructuredTool } from 'langchain/tools';
import { BufferMemory } from 'langchain/memory';
export declare class ResetConversationTool extends DynamicStructuredTool {
    name: string;
    description: string;
    private memory;
    setMemory(memory: BufferMemory): void;
    constructor();
}

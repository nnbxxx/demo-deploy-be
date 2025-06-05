import { DynamicStructuredTool } from '@langchain/core/tools';
import { z } from 'zod';
export declare const ImportPDFTool: DynamicStructuredTool<z.ZodObject<{
    filePath: z.ZodString;
}, "strip", z.ZodTypeAny, {
    filePath?: string;
}, {
    filePath?: string;
}>, {
    filePath?: string;
}, {
    filePath?: string;
}, string>;

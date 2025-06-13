import { TYPE_TIME_FILTER } from 'src/constants/schema.enum';
export declare function getTimeRangeFromDate(type: TYPE_TIME_FILTER, to?: Date): {
    from: Date;
    to: Date;
};
export declare function cosineSimilarity(vecA: number[], vecB: number[]): number;

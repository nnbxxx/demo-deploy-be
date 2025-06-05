import { Model, PopulateOptions, RootFilterQuery, SortOrder } from 'mongoose';
interface QueryOptions<T> {
    currentPage?: number | string;
    limit?: number | string;
    query?: RootFilterQuery<T>;
    sort?: {
        [key: string]: SortOrder;
    };
    selectFields?: string[];
    population?: PopulateOptions | PopulateOptions[];
}
interface PaginationMeta {
    current: number;
    pageSize: number;
    pages: number;
    total: number;
}
export interface PaginatedResult<T> {
    meta: PaginationMeta;
    result: T[];
}
export declare function paginate<T>(model: Model<T>, { currentPage, limit, query, sort, selectFields, population, }: QueryOptions<T>): Promise<PaginatedResult<T>>;
export {};

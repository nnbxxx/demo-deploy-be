import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { IUser } from '../users/users.interface';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/category.Schemas").Category> & import("./schemas/category.Schemas").Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/category.Schemas").Category> & import("./schemas/category.Schemas").Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/category.Schemas").Category> & import("./schemas/category.Schemas").Category & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./schemas/category.Schemas").Category> & import("./schemas/category.Schemas").Category & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/category.Schemas").Category> & import("./schemas/category.Schemas").Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/category.Schemas").Category> & import("./schemas/category.Schemas").Category & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(updateCategoryDto: UpdateCategoryDto, user: IUser): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
}

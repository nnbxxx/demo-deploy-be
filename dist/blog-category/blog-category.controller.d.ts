import { BlogCategoryService } from './blog-category.service';
import { CreateBlogCategoryDto } from './dto/create-blog-category.dto';
import { UpdateBlogCategoryDto } from './dto/update-blog-category.dto';
import { IUser } from 'src/modules/users/users.interface';
export declare class BlogCategoryController {
    private readonly blogCategoryService;
    constructor(blogCategoryService: BlogCategoryService);
    create(createBlogCategoryDto: CreateBlogCategoryDto, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/blog-category.schemas").BlogCategory> & import("./schemas/blog-category.schemas").BlogCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/blog-category.schemas").BlogCategory> & import("./schemas/blog-category.schemas").BlogCategory & {
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
        result: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/blog-category.schemas").BlogCategory> & import("./schemas/blog-category.schemas").BlogCategory & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./schemas/blog-category.schemas").BlogCategory> & import("./schemas/blog-category.schemas").BlogCategory & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/blog-category.schemas").BlogCategory> & import("./schemas/blog-category.schemas").BlogCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/blog-category.schemas").BlogCategory> & import("./schemas/blog-category.schemas").BlogCategory & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(updateBlogCategoryDto: UpdateBlogCategoryDto, user: IUser): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
}

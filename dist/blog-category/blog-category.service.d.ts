import { CreateBlogCategoryDto } from './dto/create-blog-category.dto';
import { UpdateBlogCategoryDto } from './dto/update-blog-category.dto';
import { BlogCategory, BlogCategoryDocument } from './schemas/blog-category.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/modules/users/users.interface';
import mongoose from 'mongoose';
export declare class BlogCategoryService {
    private blogCategoryModel;
    constructor(blogCategoryModel: SoftDeleteModel<BlogCategoryDocument>);
    create(createBlogCategoryDto: CreateBlogCategoryDto, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, BlogCategory> & BlogCategory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, BlogCategory> & BlogCategory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, BlogCategory> & BlogCategory & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        }> & mongoose.Document<unknown, {}, BlogCategory> & BlogCategory & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, BlogCategory> & BlogCategory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, BlogCategory> & BlogCategory & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    update(updateBlogCategoryDto: UpdateBlogCategoryDto, user: IUser): Promise<mongoose.UpdateWriteOpResult>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
}

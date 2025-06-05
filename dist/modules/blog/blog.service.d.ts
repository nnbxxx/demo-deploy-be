import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog, BlogDocument } from './schemas/blog.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from '../users/users.interface';
import mongoose from 'mongoose';
export declare class BlogService {
    private blogModel;
    constructor(blogModel: SoftDeleteModel<BlogDocument>);
    create(createBlogDto: CreateBlogDto, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Blog> & Blog & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Blog> & Blog & {
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
        result: (mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Blog> & Blog & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        }> & mongoose.Document<unknown, {}, Blog> & Blog & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Blog> & Blog & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Blog> & Blog & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    update(updateBlogDto: UpdateBlogDto, user: IUser): Promise<mongoose.UpdateWriteOpResult>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
}

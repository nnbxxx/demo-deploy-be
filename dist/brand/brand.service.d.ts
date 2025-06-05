import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand, BrandDocument } from './schemas/brand.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import mongoose from 'mongoose';
import { IUser } from 'src/modules/users/users.interface';
export declare class BrandService {
    private brandModel;
    constructor(brandModel: SoftDeleteModel<BrandDocument>);
    create(createBrandDto: CreateBrandDto, user: IUser): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Brand> & Brand & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Brand> & Brand & {
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
        result: (mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Brand> & Brand & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        }> & mongoose.Document<unknown, {}, Brand> & Brand & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Brand> & Brand & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    }> & mongoose.Document<unknown, {}, Brand> & Brand & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    update(updateBrandDto: UpdateBrandDto, user: IUser): Promise<mongoose.UpdateWriteOpResult>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
}

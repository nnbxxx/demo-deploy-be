import { ColorService } from './color.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { IUser } from 'src/modules/users/users.interface';
export declare class ColorController {
    private readonly colorService;
    constructor(colorService: ColorService);
    create(createColorDto: CreateColorDto, user: IUser): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/color.schemas").Color> & import("./schemas/color.schemas").Color & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/color.schemas").Color> & import("./schemas/color.schemas").Color & {
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
        result: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/color.schemas").Color> & import("./schemas/color.schemas").Color & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("./schemas/color.schemas").Color> & import("./schemas/color.schemas").Color & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>)[];
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/color.schemas").Color> & import("./schemas/color.schemas").Color & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("./schemas/color.schemas").Color> & import("./schemas/color.schemas").Color & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    update(updateColorDto: UpdateColorDto, user: IUser): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string, user: IUser): Promise<{
        deleted: number;
    }>;
}

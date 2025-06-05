import { CreateAddressDto, CreateAddressMultipleDto } from './dto/create-address.dto';
import { Address } from './schemas/addresses.schemas';
import { Model } from 'mongoose';
export declare class AddressService {
    private addressModel;
    constructor(addressModel: Model<Address>);
    create(createAddressDto: CreateAddressDto): Promise<import("mongoose").Document<unknown, {}, Address> & Address & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    createMultiple(createAddressMultipleDto: CreateAddressMultipleDto): Promise<void>;
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: (import("mongoose").Document<unknown, {}, Address> & Address & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        })[];
    }>;
    getProvince(): Promise<(import("mongoose").Document<unknown, {}, Address> & Address & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    getDistrictsByCityId(id: string): Promise<{
        Id: string;
        Name: string;
    }[]>;
    getWardByCityId(provinceId: string, districtId: string): Promise<{
        Id: string;
        Name: string;
    }[]>;
}

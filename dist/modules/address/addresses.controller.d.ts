import { AddressService } from './addresses.service';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    findProvince(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/addresses.schemas").Address> & import("./schemas/addresses.schemas").Address & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[]>;
    findDistricts(idProvince: string): Promise<{
        Id: string;
        Name: string;
    }[]>;
    findWards(provinceId: string, districtId: string): Promise<{
        Id: string;
        Name: string;
    }[]>;
}

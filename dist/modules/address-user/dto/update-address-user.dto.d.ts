import { CreateAddressUserDto } from './create-address-user.dto';
declare const UpdateAddressUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAddressUserDto>>;
export declare class UpdateAddressUserDto extends UpdateAddressUserDto_base {
    _id: string;
}
export declare class UpdateAddressUserDtoSWG {
    _id: string;
    user: string;
    receiver: string;
    phone: string;
    province: string;
    districts: string;
    wards: string;
    specific: string;
    isDefault: boolean;
}
export {};

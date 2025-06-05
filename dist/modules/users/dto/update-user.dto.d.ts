import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Omit<CreateUserDto, "password">>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    _id: string;
}
export declare class ProfileUserDto {
    avatar: string;
    name: string;
    gender: string;
    age: number;
}
export declare class ProfileUserDtoSw {
    name: string;
    age: number;
    gender: string;
}
export declare class ProfileUserDtoSwWeb {
    name: string;
    age: number;
    gender: string;
    avatar: string;
}
export declare class UpdateProfileUser {
    name: string;
    gender: string;
}
export declare class EmailSW {
    email: string;
}
export {};

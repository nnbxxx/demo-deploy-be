declare class Wards {
    Id: string;
    Name: string;
    Level: string;
}
declare class Districts {
    Id: string;
    Name: string;
    Wards: Wards[];
}
export declare class CreateAddressDto {
    Districts: Districts[];
    Id: string;
    Name: string;
}
export declare class CreateAddressMultipleDto {
    data: CreateAddressDto[];
}
export {};

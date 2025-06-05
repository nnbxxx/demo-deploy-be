export declare const ADMIN_ROLE = "SUPER_ADMIN";
export declare const USER_ROLE = "NORMAL_USER";
export declare const INIT_PERMISSIONS: {
    _id: string;
    name: string;
    apiPath: string;
    method: string;
    module: string;
    createdBy: {
        _id: string;
        email: string;
    };
    isDeleted: boolean;
    deletedAt: any;
    createdAt: string;
    updatedAt: string;
    __v: number;
}[];

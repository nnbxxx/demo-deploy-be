import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { PermissionDocument } from 'src/modules/permissions/schemas/permission.schemas';
import { RoleDocument } from 'src/modules/roles/schemas/role.schemas';
import { UserDocument } from 'src/modules/users/schemas/user.schema';
import { UsersService } from 'src/modules/users/users.service';
export declare class DatabasesService implements OnModuleInit {
    private userModel;
    private permissionModel;
    private roleModel;
    private configService;
    private userService;
    private readonly logger;
    constructor(userModel: SoftDeleteModel<UserDocument>, permissionModel: SoftDeleteModel<PermissionDocument>, roleModel: SoftDeleteModel<RoleDocument>, configService: ConfigService, userService: UsersService);
    onModuleInit(): Promise<void>;
}

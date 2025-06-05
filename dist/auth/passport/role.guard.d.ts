import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare enum USER_BASE_ROLES {
    ADMIN = "admin",
    USER = "user"
}
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: USER_BASE_ROLES[]) => import("@nestjs/common").CustomDecorator<string>;
export declare class RolesGuard implements CanActivate {
    private reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
}

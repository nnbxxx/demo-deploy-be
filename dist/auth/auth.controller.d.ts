import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { RegisterUserDto } from 'src/modules/users/dto/create-user.dto';
import { IUser } from 'src/modules/users/users.interface';
import { ChangePasswordAuthDto, CodeAuthDto } from './dto/create-auth.dto';
import { UsersService } from '../modules/users/users.service';
import { ProfileUserDto } from 'src/modules/users/dto/update-user.dto';
import { RolesService } from 'src/modules/roles/roles.service';
export declare class AuthController {
    private authService;
    private userService;
    private rolesService;
    constructor(authService: AuthService, userService: UsersService, rolesService: RolesService);
    handleLogin(req: any, response: Response): Promise<{
        access_token: string;
        user: {
            _id: string;
            name: string;
            email: string;
            role: {
                _id: string;
                name: string;
            };
            age: string;
            gender: string;
            address: string;
            avatar: string;
            point: number;
        };
    }>;
    handleRegister(registerUserDto: RegisterUserDto): Promise<{
        _id: import("mongoose").Types.ObjectId;
        createdAt: Date;
    }>;
    handleGetAccount(user: IUser): Promise<{
        user: IUser;
    }>;
    handleRefreshToken(request: Request, response: Response): Promise<{
        access_token: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            name: string;
            email: string;
            role: string;
            age: number;
            gender: import("../constants/schema.enum").TYPE_GENDER;
            address: string;
            avatar: string;
            point: number;
        };
    }>;
    handleLogout(response: Response, user: IUser): Promise<string>;
    handleChangePassword(userDto: ChangePasswordAuthDto): Promise<{
        isBeforeCheck: true;
    }>;
    handleUpdateProfile(userDto: ProfileUserDto, user: IUser): Promise<import("mongoose").UpdateWriteOpResult>;
    handleUpdateProfileWeb(userDto: ProfileUserDto, user: IUser): Promise<import("mongoose").UpdateWriteOpResult>;
    checkCode(registerDto: CodeAuthDto): Promise<{
        isBeforeCheck: true;
    }>;
    retryActive(email: string): Promise<{
        _id: import("mongoose").Types.ObjectId;
    }>;
    retryPassword(email: string): Promise<{
        _id: import("mongoose").Types.ObjectId;
        email: string;
    }>;
}

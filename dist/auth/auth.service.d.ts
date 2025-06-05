import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { ChangePasswordAuthDto, CodeAuthDto } from './dto/create-auth.dto';
import { UsersService } from 'src/modules/users/users.service';
import { IUser } from 'src/modules/users/users.interface';
import { RegisterUserDto } from 'src/modules/users/dto/create-user.dto';
import { CartsService } from 'src/modules/carts/carts.service';
import { LikeProductsService } from 'src/modules/like-products/like-products.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    private cartService;
    private likeProductService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService, cartService: CartsService, likeProductService: LikeProductsService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: IUser, response: Response): Promise<{
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
    register(user: RegisterUserDto): Promise<{
        _id: import("mongoose").Types.ObjectId;
        createdAt: Date;
    }>;
    handleActive: (data: CodeAuthDto) => Promise<{
        isBeforeCheck: true;
    }>;
    checkCode: (data: CodeAuthDto) => Promise<{
        isBeforeCheck: true;
    }>;
    retryActive: (data: string) => Promise<{
        _id: import("mongoose").Types.ObjectId;
    }>;
    retryPassword: (email: string) => Promise<{
        _id: import("mongoose").Types.ObjectId;
        email: string;
    }>;
    changePassword: (data: ChangePasswordAuthDto) => Promise<{
        isBeforeCheck: true;
    }>;
    createRefreshToken: (payload: any) => string;
    processNewToken: (refreshToken: string, response: Response) => Promise<{
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
    logout: (response: Response, user: IUser) => Promise<string>;
}

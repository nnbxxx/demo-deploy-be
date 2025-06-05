import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { IUser } from 'src/modules/users/users.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: IUser): Promise<{
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
    }>;
}
export {};

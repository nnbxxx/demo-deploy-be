import { JwtService } from '@nestjs/jwt';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { IUser } from 'src/modules/users/users.interface';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private jwtService;
    server: Server;
    private logger;
    constructor(jwtService: JwtService);
    afterInit(server: any): any;
    handleConnection(client: Socket & {
        user: IUser;
    }): Promise<void>;
    handleDisconnect(client: any): void;
}

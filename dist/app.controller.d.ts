import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { ConfigService } from '@nestjs/config';
export declare class AppController {
    private readonly appService;
    private configService;
    private authService;
    getHello(): any;
    constructor(appService: AppService, configService: ConfigService, authService: AuthService);
}

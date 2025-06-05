"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("./auth/passport/jwt-auth.guard");
const path_1 = require("path");
const transform_interceptor_1 = require("./core/transform.interceptor");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT');
    const reflector = app.get(core_1.Reflector);
    app.useGlobalGuards(new jwt_auth_guard_1.JwtAuthGuard(reflector));
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor(reflector));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('ejs');
    console.log('>> check path public: ', (0, path_1.join)(__dirname, '..', 'public'));
    console.log('>> check path views: ', (0, path_1.join)(__dirname, '..', 'views'));
    app.use((0, helmet_1.default)());
    app.enableCors({
        "origin": true,
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        credentials: true
    });
    app.use((0, compression_1.default)());
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.setGlobalPrefix('api');
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: ['1']
    });
    app.use((0, cookie_parser_1.default)());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('NestJS  APIs Document')
        .setDescription('All Modules APIs')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'JWT',
        in: 'header',
    }, 'token')
        .addSecurityRequirements('token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        }
    });
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map
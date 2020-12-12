import { Module } from '@nestjs/common';
import { AuthController } from '../controller/auth.controller';
import { UserService } from '../service/users.service';
import { AuthService } from '../service/auth.service';
import { JwtStrategy } from '../passport/auth/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../module/users.module';
import { Users } from '../entity/users.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [
        UserModule,
        TypeOrmModule.forFeature([Users]),
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('SECRET_KEY'),
                signOptions: { expiresIn: '3600s' }
            }),
            inject: [ConfigService],
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, UserService, JwtStrategy],
})
export class AuthModule { }

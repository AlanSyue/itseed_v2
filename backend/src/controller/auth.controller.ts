import { Controller, Body, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../service/auth.service';

interface PostData {
    email: string,
    password: string
}

@Controller()
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('auth/login')
    async login(@Body() postData: PostData) {
        const userData = await this.authService.validateUser(postData.email, postData.password);
        if (!userData) {
            return {
                errCode: '1001',
                errMsg: 'error',
                errType: 'alert',
                data: {},
            };
        }
        const tokenData = await this.authService.signToken(userData);
        return {
            errCode: '0000',
            errMsg: '',
            errType: 'none',
            data: tokenData,
        };
    }
}

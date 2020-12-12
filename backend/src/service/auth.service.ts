import { Injectable } from '@nestjs/common';
import { UserService } from '../service/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from '../DTO/users/user.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string): Promise<UserDTO> {
        const user = await this.usersService.findUserData({
            email: email,
            password: password
        });

        if (user) {
            return user;
        }
        return null;
    }

    async signToken(user: UserDTO): Promise<Object> {
        const payload = {
            id: user.id,
            email: user.email
        };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}

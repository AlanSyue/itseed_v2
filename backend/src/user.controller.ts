import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('users')
  getHello(): any {
    return this.userService.addUser({
      email: 'b123105@gmail.com',
      password: 'wejflkwejflewf'
    });
  }
}

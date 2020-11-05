import { 
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put
} from '@nestjs/common';
import passport = require('passport');
import { UserService } from '../service/users.service';
import { UserDTO } from '../DTO/users.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('users')
  findAll(): Object {
    return this.userService.getAllUser();
  }

  @Get('user/:userId')
  findUser(@Param('userId') id): Object {
    return this.userService.getUserById(id);
  }

  @Post('user')
  addUser(@Body() userData: UserDTO): Object {
    return this.userService.addUser(userData);
  }

  @Put('user/:userId')
  updateUserById(@Param('userId') id, @Body() userData: UserDTO): Object {
    return this.userService.updateUserById(id, userData);
  }
}

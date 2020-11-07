import { 
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { UsersService } from '../service/users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  findAll(): Object {
    return this.usersService.getAllUser();
  }

  @Get('user/:userId')
  findUser(@Param('userId') id): Object {
    return this.usersService.getUserById(id);
  }

  @Post('user')
  addUser(@Body() userData): Object {
    return this.usersService.addUser(userData);
  }

  @Put('user/:userId')
  updateUserById(@Param('userId') id, @Body() userData): Object {
    return this.usersService.updateUserById(id, userData);
  }

  @Delete('user/:userId')
  deleteUserById(@Param('userId') id): Object {
    return this.usersService.deleteUserById(id);
  }
}

import { 
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { UserService } from '../service/users.service';
import { UserDTO } from '../DTO/users.dto';
import { ValidationPipe } from '../pipes/validation.pipe';

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
  addUser(@Body(new ValidationPipe()) userData: UserDTO): Object {
    return this.userService.addUser(userData);
  }

  @Put('user/:userId')
  updateUserById(@Param('userId') id, @Body(new ValidationPipe()) userData: UserDTO): Object {
    return this.userService.updateUserById(id, userData);
  }

  @Delete('user/:userId')
  deleteUserById(@Param('userId') id): Object {
    return this.userService.deleteUserById(id);
  }
}

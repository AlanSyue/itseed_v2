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
import { MailService } from '../service/mailer.service';
import { createUserDTO } from '../DTO/user/createUser.dto';
import { updateUserDTO } from '../DTO/user/updateUser.dto';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly mailService: MailService,
  ) {}

  @Get('users')
  findAll(): Object {
    return this.userService.getAllUser();
  }

  @Get('user/:userId')
  findUser(@Param('userId') id): Object {
    return this.userService.getUserById(id);
  }

  @Get('send')
  sendMail(): void {
    return this.mailService.send();
  }

  @Post('user')
  addUser(@Body(ValidationPipe) userData: createUserDTO): Object {
    return this.userService.addUser(userData);
  }

  @Put('user/:userId')
  updateUserById(
    @Param('userId') id,
    @Body(ValidationPipe) userData: updateUserDTO,
  ): Object {
    return this.userService.updateUserById(id, userData);
  }

  @Delete('user/:userId')
  deleteUserById(@Param('userId') id): Object {
    return this.userService.deleteUserById(id);
  }
}

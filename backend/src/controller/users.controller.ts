import { 
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query
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

  @Get('verify/:email')
  async verifyUser(
    @Param('email') email: string,
    @Query() query,
  ): Promise<Object> {
    const verifyResult = await this.userService.verifyUser({
      email: email,
      hashToken: query.token,
    });
    if (verifyResult === true) {
      return {
        errCode: '0000',
        errMsg: '',
        errType: 'none',
        data: {},
      };
    } else {
      return {
        errCode: '1006',
        errMsg: '驗證連結錯誤，請重新發送驗證信',
        errType: 'alert',
        data: {},
      };
    }
  }

  @Post('register')
  async userRegister(
    @Body(ValidationPipe) userPostData: createUserDTO,
  ): Promise<Object> {
    const userData = await this.userService.register(userPostData);
    if (!userData) {
      return {
        errCode: '1005',
        errMsg: '此信箱已經註冊',
        errType: 'alert',
        data: {},
      };
    }
    this.mailService.send(userData);
    return {
      errCode: '0000',
      errMsg: '',
      errType: 'none',
      data: {},
    };
  }

  @Post('login')
  async userLogin(
    @Body(ValidationPipe) userPostData: createUserDTO,
  ): Promise<Object> {
    const loginResult = await this.userService.login(userPostData);
    if (!loginResult.status) {
      return {
        errCode: '1001',
        errMsg: loginResult.msg,
        errType: 'alert',
        data: {},
      };
    }
    return {
      errCode: '0000',
      errMsg: '',
      errType: 'none',
      data: {},
    };
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

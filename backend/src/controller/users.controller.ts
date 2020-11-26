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
import { createUserDTO } from '../DTO/users/createUser.dto';
import { updateUserDTO } from '../DTO/users/updateUser.dto';
import { ValidationPipe } from '../pipes/validation.pipe';
import * as _ from 'lodash';

interface VerifyQuery {
  token: string
}

interface PostData {
  email: string;
  type: string
}
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
  findUser(@Param('userId') id: number): Object {
    return this.userService.getUserById(id);
  }

  @Get('verify/:email')
  async verifyUser(
    @Param('email') email: string,
    @Query() query: VerifyQuery,
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

  @Post('verify')
  async reVerify(@Body() postData: PostData) {
    const registerData = await this.userService.getUserByEmail(postData.email);
    if (_.isEmpty(registerData)) {
      return {
        errCode: '1001',
        errMsg: '該信箱尚未註冊',
        errType: 'alert',
        data: {},
      };
    }
    this.mailService.send(registerData, postData.type);
    return {
      errCode: '0000',
      errMsg: '',
      errType: 'none',
      data: {},
    };
  }

  @Post('register')
  async userRegister(
    @Body(ValidationPipe) userPostData: createUserDTO,
  ): Promise<Object> {
    const userData = await this.userService.register(userPostData);
    if (_.isEmpty(userData)) {
      return {
        errCode: '1005',
        errMsg: '此信箱已經註冊',
        errType: 'alert',
        data: {},
      };
    }
    this.mailService.send(userData, 'register');
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
    @Param('userId') id: number,
    @Body(ValidationPipe) userData: updateUserDTO,
  ): Object {
    return this.userService.updateUserById(id, userData);
  }

  @Delete('user/:userId')
  deleteUserById(@Param('userId') id: number): Object {
    return this.userService.deleteUserById(id);
  }
}

import { 
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  UseGuards
} from '@nestjs/common';
import { UserService } from '../service/users.service';
import { ProfilesService } from '../service/profiles.service';
import { MailService } from '../service/mailer.service';
import { createUserDTO } from '../DTO/users/createUser.dto';
import { updateUserDTO } from '../DTO/users/updateUser.dto';
import { ProfileDTO } from '../DTO/profiles/profile.dto';
import { ValidationPipe } from '../pipes/validation.pipe';
import { JwtAuthGuard } from '../passport/auth/jwt-auth.guard';
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
    private readonly profilesService: ProfilesService,
    private readonly mailService: MailService,
  ) {}
  
  @UseGuards(JwtAuthGuard)
  @Get('users')
  findAll(): Object {
    return this.userService.getAllUser();
  }

  @UseGuards(JwtAuthGuard)
  @Get('user/:userId')
  findUser(@Param('userId') id: number): Object {
    return this.userService.getUserById(id);
  }

  @Get('verify/:email/:type')
  async verifyUser(
    @Param('email') email: string,
    @Param('type') type: string,
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

  @Put('user/:userId')
  async updateUserById(
    @Param('userId') id: number,
    @Body(ValidationPipe) userData: updateUserDTO,
  ): Promise<Object> {
    return this.userService.updateUserById(id, userData);
  }

  @Delete('user/:userId')
  deleteUserById(@Param('userId') id: number): Object {
    return this.userService.deleteUserById(id);
  }

  @Get('profiles')
  getProfiles(): Object {
    return this.profilesService.getProfiles();
  }

  @Post('profile')
  async addProfile(
    @Body() profileData: ProfileDTO
  ): Promise<Object> {
    const userData = await this.userService.getUserById(profileData.user_id);
    if (_.isEmpty(userData)) {
      return {
        errCode: '1001',
        errMsg: '查無此 user',
        errType: 'alert',
        data: {},
      };
    }
    return this.profilesService.addProfile(profileData);
  }

  @Put('profile/:userId')
  async updateProfile(
    @Param('userId') id: number,
    @Body() profileData: ProfileDTO
  ): Promise<Object> {
    const profile = await this.profilesService.getProfileByUserId(id);
    if (_.isEmpty(profile)) {
      return {
        errCode: '1001',
        errMsg: '查無此 user',
        errType: 'alert',
        data: {},
      };
    }
    return this.profilesService.updateProfile(profile.id, profileData);
  }
}

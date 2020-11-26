import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controller/users.controller';
import { UserService } from '../service/users.service';
import { ProfilesService } from '../service/profiles.service';
import { MailService } from '../service/mailer.service';
import { Users } from '../entity/users.entity';
import { Profiles } from '../entity/profiles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Profiles])],
  controllers: [UserController],
  providers: [UserService, MailService, ProfilesService],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controller/users.controller';
import { UserService } from '../service/users.service';
import { MailService } from '../service/mailer.service';
import { Users } from '../entity/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UserController],
  providers: [UserService, MailService],
})
export class UserModule {}

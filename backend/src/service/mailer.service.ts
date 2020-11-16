import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { Users } from '../entity/users.entity';
import { hashSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private readonly mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  // TODO set register type
  public send(register, type: string): void {
    const emailTemplateData = this.configService.get<Object>('EMAIL_TEMPLATE_DATA');
    const registerEmail = register.email;
    const hashToken = hashSync(registerEmail + Date.now().toString(), 5);
    this.usersRepository.update(register.id, {
      token: hashToken,
    });
    const link = `${process.env.FRONTEND_DOMAIN}/verify/${registerEmail}/${type}?token=${hashToken}`;
    this.mailerService.sendMail({
      to: registerEmail,
      from: '資訊種子',
      subject: emailTemplateData[type].subject,
      template: emailTemplateData[type].template,
      context: {
        link: link,
      },
    });
  }
}

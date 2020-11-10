import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { hashSync } from 'bcrypt';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  // TODO set register type
  public send(register): void {
    const registerEmail = register.email
    const hashToken = hashSync(registerEmail + register.created_at, 5);
    // TODO fix domain
    const registerLink = `http://localhost:3000/verify/${registerEmail}?token=${hashToken}`
    // TODO Put html to template
    this.mailerService
      .sendMail({
        to: registerEmail,
        from: '資訊種子',
        subject: '資訊種子註冊信',
        html: `
          <p>
              親愛的報名者您好! 謝謝您的註冊，<br>
              這封信是由資訊種子的會員註冊系統所寄出，<br>
              請點選下面的網址來進行註冊的下一個步驟：<br>
          </p>
          <a href="${registerLink}" >  點擊此連結註冊 </a>
          <p>如以上網址無法通過認證，請聯繫我們。</p>

          <p>※ 如果您不曾提出資訊種子的註冊申請，請您直接刪除本信，抱歉造成您的困擾！</p>
          <p>※ 如果您無法連結信中網址，請回信讓我們知道。</p>

          <br>
          <p>第十八屆資訊種子培訓計畫敬上</p>
        `,
      });
  }
}

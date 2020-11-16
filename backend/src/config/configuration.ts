export default () => ({
  EMAIL_TEMPLATE_DATA: {
    register: {
      subject: '資訊種子註冊信',
      template: 'verificationEmail',
    },
    password: {
      subject: '【資訊種子第18屆】【忘記密碼】',
      template: 'resetPasswordEmail'
    },
  },
});

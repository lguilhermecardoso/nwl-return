import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b718f9cc4dec86",
    pass: "cb1af25083f4da"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Guilherme Cardoso <guilhermecardoso.info@gmail.com>',
      subject,
      html: body
    });
    }
}
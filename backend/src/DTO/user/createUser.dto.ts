import { IsNotEmpty, IsEmail } from 'class-validator';

export class createUserDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
import { 
  IsEmail,
  IsString,
  IsBoolean
} from 'class-validator';

export class updateUserDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  is_verify: Boolean;
}
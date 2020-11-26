import { 
    IsEmail,
    IsString,
    IsBoolean,
    IsDate
  } from 'class-validator';
  
  export class UserDTO {
    @IsEmail()
    email: string;
  
    @IsString()
    password: string;

    @IsString()
    token: string
  
    @IsBoolean()
    is_verify: Boolean;

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date;
  }
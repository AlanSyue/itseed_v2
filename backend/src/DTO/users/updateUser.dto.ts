import { 
  IsEmail,
  IsString,
  IsBoolean
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class updateUserDTO {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsBoolean()
  @ApiProperty()
  is_verify: Boolean;
}
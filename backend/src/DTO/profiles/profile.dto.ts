import { 
    IsString,
    IsInt,
    IsEnum,
    IsDate
} from 'class-validator';

export enum gender {
    male = "male",
    female = "female",
    other = "other"    
}

export enum education {
    bachelor = "bachelor",
    master = "master"  
}
  
export class ProfileDTO {
    @IsInt()
    user_id: number;

    @IsString()
    name: string;

    @IsEnum(gender)
    gender: gender

    @IsString()
    school: string;

    @IsString()
    department: string;

    @IsEnum(education)
    education: education

    @IsInt()
    grade: number;

    @IsString()
    reference: string;

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date;
}
import { 
    IsString,
    IsInt,
    IsDate
} from 'class-validator';

export class MembersDTO {
    @IsInt()
    id: number;

    @IsString()
    name: string;

    @IsString()
    school: string;

    @IsString()
    department: string;

    @IsInt()
    grade: number;

    @IsString()
    reference: string;

    @IsDate()
    created_at: Date;

    @IsDate()
    updated_at: Date;
}

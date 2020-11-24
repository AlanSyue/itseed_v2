import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

export enum gender {
    male = "male",
    female = "female",
    other = "other"    
}

export enum education {
    bachelor = "bachelor",
    master = "master"  
}

@Entity('profiles')
export class Profiles {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column({
        type: 'varchar',
        length: 255,
    })
    name: string;

    @Column({
        type: "enum",
        enum: gender,
        default: gender.male
    })
    gender: gender;

    @Column({
        type: 'varchar',
        length: 255,
    })
    school: string;

    @Column({
        type: 'varchar',
        length: 255,
    })
    department: string;

    @Column({
        type: "enum",
        enum: education,
        default: education.bachelor
    })
    education: education;

    @Column()
    grade: number;

    @Column({
        type: 'varchar',
        length: 255,
    })
    reference: string;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)'
    })
    created_at: Date;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    })
    updated_at: Date;

}
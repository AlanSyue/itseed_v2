import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

export enum gender {
    male = "male",
    female = "female",
    other = "other"    
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
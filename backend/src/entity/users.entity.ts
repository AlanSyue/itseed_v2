import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('users')
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 255,
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 255,        
    })
    password: string;

    @Column({
        default: false,
    })
    is_verify: boolean;
    
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

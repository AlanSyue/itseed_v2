import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('members')
export class Members {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 255,
    })
    name: string;

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

    @Column()
    grade: number;

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

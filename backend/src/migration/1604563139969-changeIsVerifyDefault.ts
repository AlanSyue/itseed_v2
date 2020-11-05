import {MigrationInterface, QueryRunner} from "typeorm";

export class changeIsVerifyDefault1604563139969 implements MigrationInterface {
    name = 'changeIsVerifyDefault1604563139969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_verify" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_verify" SET DEFAULT false`);
    }

}

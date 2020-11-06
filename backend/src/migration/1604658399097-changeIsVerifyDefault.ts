import {MigrationInterface, QueryRunner} from "typeorm";

export class changeIsVerifyDefault1604658399097 implements MigrationInterface {
    name = 'changeIsVerifyDefault1604658399097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_verify" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_verify" SET DEFAULT true`);
    }

}

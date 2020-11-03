import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTableColumn1604418617494 implements MigrationInterface {
    name = 'UserTableColumn1604418617494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "is_verify" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(6), "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(6), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}

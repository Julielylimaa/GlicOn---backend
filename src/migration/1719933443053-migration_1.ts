import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration11719933443053 implements MigrationInterface {
    name = 'Migration11719933443053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes" ADD "horario" TIME NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes" DROP COLUMN "horario"`);
    }

}

import { MigrationInterface, QueryRunner } from 'typeorm'

export class usersEmailUnique1539545735431 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE users ADD CONSTRAINT idx_email_unique UNIQUE (email)`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE users DROP CONSTRAINT idx_email_unique`,
    )
  }
}

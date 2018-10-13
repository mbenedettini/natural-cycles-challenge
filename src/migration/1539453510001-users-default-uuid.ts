import { MigrationInterface, QueryRunner } from 'typeorm'

export class usersDefaultUuid1539453510001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE users ALTER COLUMN id SET DEFAULT uuid_generate_v1()`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}

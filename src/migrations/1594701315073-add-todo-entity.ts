import { MigrationInterface, QueryRunner } from 'typeorm'

export class addTodoEntity1594701315073 implements MigrationInterface {
  name = 'addTodoEntity1594701315073'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "todo" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`,
      undefined
    )
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`,
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`, undefined)
    await queryRunner.query(`DROP TABLE "todo"`, undefined)
  }
}

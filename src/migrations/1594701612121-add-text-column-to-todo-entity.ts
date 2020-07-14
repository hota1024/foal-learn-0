import { MigrationInterface, QueryRunner } from 'typeorm'

export class addTextColumnToTodoEntity1594701612121
  implements MigrationInterface {
  name = 'addTextColumnToTodoEntity1594701612121'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "temporary_todo" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "text" varchar NOT NULL)`,
      undefined
    )
    await queryRunner.query(
      `INSERT INTO "temporary_todo"("id") SELECT "id" FROM "todo"`,
      undefined
    )
    await queryRunner.query(`DROP TABLE "todo"`, undefined)
    await queryRunner.query(
      `ALTER TABLE "temporary_todo" RENAME TO "todo"`,
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "todo" RENAME TO "temporary_todo"`,
      undefined
    )
    await queryRunner.query(
      `CREATE TABLE "todo" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL)`,
      undefined
    )
    await queryRunner.query(
      `INSERT INTO "todo"("id") SELECT "id" FROM "temporary_todo"`,
      undefined
    )
    await queryRunner.query(`DROP TABLE "temporary_todo"`, undefined)
  }
}

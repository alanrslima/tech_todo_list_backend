import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTasks1603343117222 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tasks",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "name", type: "varchar" },
          { name: "description", type: "text" },
          { name: "favorite", type: "boolean", default: false },
          { name: "concluded", type: "boolean", default: false },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tasks");
  }
}

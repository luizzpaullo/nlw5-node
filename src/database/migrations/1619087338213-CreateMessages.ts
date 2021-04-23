import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619087338213 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "messages",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "admin_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "text",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL", //set null deixa excluir o user e deixa os registro com user null; Poderia ser como restrito nao permitindo a exclusao; ou cascata removendo todos os registros da table;
                        onUpdate: "SET NULL",
                    }
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages");
    }

}

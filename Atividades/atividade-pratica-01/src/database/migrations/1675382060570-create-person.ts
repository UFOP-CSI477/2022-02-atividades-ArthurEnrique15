import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createPerson1675382060570 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'person',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'document',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'number',
          type: 'int',
          isNullable: true,
        },
        {
          name: 'complement',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'street',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          isNullable: true,
        },
        {
          name: 'deletedAt',
          type: 'timestamp',
          isNullable: true,
        },
        {
          name: 'bloodTypeId',
          type: 'int',
          isNullable: true,
          default: null,
        },
      ],
      uniques: [
        {
          name: 'unique_document',
          columnNames: ['document'],
        },
      ],
      foreignKeys: [
        {
          name: 'fk_blood_type',
          referencedTableName: 'blood_type',
          referencedColumnNames: ['id'],
          columnNames: ['bloodTypeId'],
          onDelete: 'SET NULL',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('person');
  }
}

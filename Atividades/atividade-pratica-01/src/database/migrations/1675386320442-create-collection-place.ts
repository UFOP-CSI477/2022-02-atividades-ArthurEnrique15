import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createCollectionPlace1675386320442 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'collection_place',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'number',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'complement',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'street',
          type: 'varchar',
          isNullable: false,
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
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('collection_place');
  }
}

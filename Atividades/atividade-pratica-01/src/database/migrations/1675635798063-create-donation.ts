import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createDonation1675635798063 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'donation',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'date',
          type: 'timestamp',
          isNullable: false,
        },
        {
          name: 'personId',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'collectionPlaceId',
          type: 'int',
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
      foreignKeys: [
        {
          name: 'fk_person',
          referencedTableName: 'person',
          referencedColumnNames: ['id'],
          columnNames: ['personId'],
          onDelete: 'CASCADE',
        },
        {
          name: 'fk_collection_place',
          referencedTableName: 'collection_place',
          referencedColumnNames: ['id'],
          columnNames: ['collectionPlaceId'],
          onDelete: 'CASCADE',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('donation');
  }
}

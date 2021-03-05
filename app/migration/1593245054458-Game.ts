import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  getRepository
} from 'typeorm';
import Game from '../entity/Game';

export class Game1593245054458 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'game',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'display_name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'image',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'executable_path',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'directory',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'directory_hint',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'current_version',
            type: 'varchar',
            isNullable: true
          }
        ]
      }),
      true
    );

    await queryRunner.createIndex(
      'game',
      new TableIndex({
        name: 'IDX_GAME_TITLE',
        columnNames: ['name']
      })
    );

    // Seed the DB
    const repo = await getRepository(Game);
    const yakuza1 = new Game();
    yakuza1.id = 1;
    yakuza1.name = 'Yakuza1';
    yakuza1.displayName = 'Yakuza Kiwami';
    yakuza1.image = './assets/image/yakuza-1.jpg';
    yakuza1.executablePath = '\\sm1\\Shenmue.exe';
    yakuza1.directoryHint = 'SMLaunch';
    await repo.save(yakuza1);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // do nothing
  }
}

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
    yakuza1.image = './assets/image/yakuza-1.png';
    yakuza1.executablePath = '\\media\\YakuzaKiwami.exe';
    yakuza1.directoryHint = 'Yakuza Kiwami';
    await repo.save(yakuza1);

    const yakuza2 = new Game();
    yakuza2.id = 2;
    yakuza2.name = 'Yakuza2';
    yakuza2.displayName = 'Yakuza Kiwami 2';
    yakuza2.image = './assets/image/yakuza-2.png';
    yakuza2.executablePath = '\\YakuzaKiwami2.exe';
    yakuza2.directoryHint = 'Yakuza Kiwami 2';
    await repo.save(yakuza2);

    const yakuza3 = new Game();
    yakuza3.id = 3;
    yakuza3.name = 'Yakuza3';
    yakuza3.displayName = 'Yakuza 3 Remastered';
    yakuza3.image = './assets/image/yakuza-3.png';
    yakuza3.executablePath = '\\Yakuza3.exe';
    yakuza3.directoryHint = 'Yakuza 3';
    await repo.save(yakuza3);

    const yakuza4 = new Game();
    yakuza4.id = 4;
    yakuza4.name = 'Yakuza4';
    yakuza4.displayName = 'Yakuza 4 Remastered';
    yakuza4.image = './assets/image/yakuza-4.png';
    yakuza4.executablePath = '\\Yakuza4.exe';
    yakuza4.directoryHint = 'Yakuza 4';
    await repo.save(yakuza4);

    const yakuza5 = new Game();
    yakuza5.id = 5;
    yakuza5.name = 'Yakuza5';
    yakuza5.displayName = 'Yakuza 5 Remastered';
    yakuza5.image = './assets/image/yakuza-5.png';
    yakuza5.executablePath = '\\main\\Yakuza5.exe';
    yakuza5.directoryHint = 'Yakuza 5';
    await repo.save(yakuza5);

    const yakuza6 = new Game();
    yakuza6.id = 6;
    yakuza6.name = 'Yakuza6';
    yakuza6.displayName = 'Yakuza 6: SoL';
    yakuza6.image = './assets/image/yakuza-6.png';
    yakuza6.executablePath = '\\Yakuza6.exe';
    yakuza6.directoryHint = 'Yakuza 6 - The Song of Life';
    await repo.save(yakuza6);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // do nothing
  }
}

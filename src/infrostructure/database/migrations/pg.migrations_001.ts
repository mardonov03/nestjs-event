import type { MigrationBuilder } from 'node-pg-migrate';

export function up(pgm: MigrationBuilder) {
  pgm.createTable('users', {
    userid: {
      type: 'serial',
      primaryKey: true,
    },
    mail: {
      type: 'varchar(255)',
      notNull: true,
      unique: true,
    },
    password: {
      type: 'varchar(255)',
      notNull: true,
    },
    date: {
      type: 'timestamp',
      default: pgm.func('current_timestamp'),
    },
  });
}

export function down(pgm: MigrationBuilder) {
  pgm.dropTable('users');
}

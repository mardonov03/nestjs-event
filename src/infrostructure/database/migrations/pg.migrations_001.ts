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
    created_at: {
      type: 'timestamp',
      default: pgm.func('current_timestamp'),
    },
    verify: {
      type: 'boolean',
      default: false,
    },
  });
}

export function down(pgm: MigrationBuilder) {
  pgm.dropTable('users');
}

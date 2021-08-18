var dbConfig = {
  synchronize: true,
  migrations: ['migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
};

// POSTGRES_HOST=127.0.0.1
// POSTGRES_PORT=5432
// POSTGRES_USER=postgres
// POSTGRES_PASSWORD=mysecretpassword
// POSTGRES_DATABASE=my_database
// PORT=3000
// MODE=DEV
// RUN_MIGRATIONS=true

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'postgres',

      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'my_database',

      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      cli: {
        migrationsDir: 'src/migration',
      },

      ssl: false,
      entities: ['**/*.entity.js'],
      // synchronize: true,
    });
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],
      migrationsRun: true,
    });
    break;
  case 'production':
    break;
  default:
    throw new Error('unknown environment');
}

module.exports = dbConfig;

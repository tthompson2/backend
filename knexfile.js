module.exports = {
    development: {
      client: 'sqlite3',
      connection: { filename: './database/sleeptracker.db3' },
      useNullAsDefault: true,
      migrations: {
        directory: './database/migrations',
        tableName: 'dbmigrations',
      },
      seeds: { directory: './database/seeds' },
    },
    testing: {
      client: 'sqlite3',
      connection: {
        filename: './data/sleeptracker-test.db3',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },
  };
  
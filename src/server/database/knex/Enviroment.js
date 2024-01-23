import knex from 'knex';

const database = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: 'database.sqlite'
    },
    migrations : {
        directory: 'src/server/database/migrations'
    },
    seeds: {
        directory: 'src/server/database/seeds'
    },
    pool: {
        afterCreate: (connection, done) => {
            connection.run('PRAGMA foreign_keys = ON');
            done();
        }
    }
};

export const Knex = knex(database);
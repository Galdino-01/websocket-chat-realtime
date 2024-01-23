export async function up(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('user_id', 250).notNullable();
        table.string('user_token', 250).notNullable();
        table.integer('user_situation', 11).notNullable();
        table.string('type', 45).notNullable();

        table.comment('Tabela de conectados');
    })
}

export async function down(knex) {
    return knex.schema.dropTable('users')
}
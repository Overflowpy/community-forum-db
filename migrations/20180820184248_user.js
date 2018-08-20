exports.up = (knex, Promise) => {
    return knex.schema.withSchema('dba').createTable('user', (table) => {
        table.increments();
        table.text('display_name').notNullable();
        table.text('google_id').notNullable();
        table.boolean('banned').notNullable().default(false);    
    })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('user')
}
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); // chave primaria padrão 1,2,3...
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
        
        /**
         * campo ong_id referência id da tabela ongs ! basicamente uma chave estrangeira
         */

    });
}

exports.down = function(knex) {
  return knex.schema.dropTable(incidents);
};

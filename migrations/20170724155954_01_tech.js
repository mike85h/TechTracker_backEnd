
exports.up = function(knex, Promise) {
    return knex.schema.createTable('technology', (table) => {
      table.increments();
      table.text('name').notNullable();
      table.text('type');
      table.text('note');
      table.specificType('examples', 'text[]');
      table.date('date');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('technology');
};


exports.up = function(knex, Promise) {
    return knex.schema.createTable('technology', (table) => {
      table.increments();
      table.text('name').notNullable();
      table.text('type');
      table.specificType('dependencies', 'text[]');
      table.specificType('notes', 'text[]');
      table.specificType('examples', 'text[]');
      table.date('dateFirstUsed');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('technology');
};

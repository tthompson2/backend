exports.up = function(knex) {
    return knex.schema.createTable('sleep', sleep => {
      sleep.increments();
  
      sleep
        .string('username', 255)
        .notNullable()
        .unique();
      sleep.string('password', 255).notNullable();

    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('sleep');
  };
  
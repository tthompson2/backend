exports.up = async function (knex) {

  await knex.schema.createTable('user', user => {
    user.increments();

    user.string('username', 255).notNullable().unique();
    user.string('password', 255).notNullable();

  })


  await knex.schema.createTable('mood', mood => {
    mood.increments();

    mood.text("mood_after_sleep")
    .notNullable()
  })

  await knex.schema.createTable('userInfo', info => {
    info.increments();

    info.string('firstName', 255).notNullable().unique();
    info.string('lastName', 255).notNullable();
    info.string('age').notNullable();
    info.datetime('date').notNullable();
    info.integer('mood_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('mood')
    .onUpdate("CASCADE")
    .onDelete("CASCADE")
  })
}

exports.down = async function (knex, Promise) {
  await knex.schema.dropTableIfExists('mood');
  await knex.schema.dropTableIfExists('userInfo');
  await knex.schema.dropTableIfExists('user');
}

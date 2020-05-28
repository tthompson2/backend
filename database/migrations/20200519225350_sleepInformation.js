exports.up = async function (knex) {

  await knex.schema.createTable('user', user => {
    user.increments();

    user.string('username', 255).notNullable().unique();
    user.string('password', 255).notNullable();
    user.string('name', 255).notNullable().unique();
    user.string('age').notNullable();
  })


  await knex.schema.createTable('mood', mood => {
    mood.increments();

    mood.text("mood_after_sleep")
    .notNullable()
  })

  await knex.schema.createTable('moodInfo', info => {
    info.increments();

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
  await knex.schema.dropTableIfExists('moodInfo');
  await knex.schema.dropTableIfExists('user');
}

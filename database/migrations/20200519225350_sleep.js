exports.up = async function (knex) {

  await knex.schema.createTable('user', user => {
    user.increments();

    user.string('username', 255).notNullable().unique();
    user.string('password', 255).notNullable();

  })

  await knex.schema.createTable('moodInfo', mood => {
    mood.increments();

    mood.string('mad');
    mood.string('meh')
    mood.string('happy');
    mood.string('excited');
  })


  await knex.schema.createTable('userInfo', info => {
    info.increments();

    info.string('firstName', 255).notNullable().unique();
    info.string('lastName', 255).notNullable();
    info.string('age').notNullable();
    info.string('date').notNullable();
  })
}

exports.down = async function (knex, Promise) {
  await knex.schema.dropTableIfExists('userInfo');
  await knex.schema.dropTableIfExists('moodInfo');
  await knex.schema.dropTableIfExists('user');
}

exports.seed = async function (knex, Promise) {

  await knex('user').truncate()
    .then(function () {

      return knex('user').insert([
        { username: 'trevor', password: "4155478713" },
        { username: "jeff", password: "login1" },
        { username: "ahmad", password: "login2" },
        { username: "tim", password: "login3"}
      ]);
    });

}
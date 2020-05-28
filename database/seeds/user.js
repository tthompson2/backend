exports.seed = async function (knex, Promise) {

  await knex('user').truncate()
    .then(function () {

      return knex('user').insert([
        { username: 'trevthom', password: "4155478713", name: "trevorT", age: 28 },
        { username: "jeff", password: "login1", name: "jeffG", age: 25 },
        { username: "ahmad", password: "login2", name: "ahmadA", age: 32 },
        { username: "tim", password: "login3", name: "timH", age: 37}
      ]);
    });

}
exports.seed = async function(knex, Promise) {

  await knex('user').truncate()
  .then(function() {

    return knex('user').insert([
      {username: 'trevor', password: "4155478713"},
      {username: "jeff", password: "login1" },
      {username: "ahmad", password: "login2"}
    ]);
  });

  await knex('userInfo').truncate()
  .then(function() {
    return knex('userInfo').insert([
      {firstName: 'tim', lastName: 'rogers', age: '40', date:'02052013' },
      {firstName: 'brandon', lastName: 'sheffield', age:'42', date:'05212000' } 
    ])
  })

}
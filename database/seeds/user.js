const bcrypt = require('bcryptjs')

const password1 = "4155478713";
const password2 = "login1"
const password3 = "login2"
const password4 =  "login3"

const hashPassword1 = bcrypt.hashSync(password1, 8)
const hashPassword2 = bcrypt.hashSync(password2, 8)
const hashPassword3 = bcrypt.hashSync(password3, 8)
const hashPassword4 = bcrypt.hashSync(password4, 8)

exports.seed = async function (knex, Promise) {

  await knex('user').truncate()
    .then(function () {

      return knex('user').insert([
        { username: 'trevthom', password: hashPassword1, name: "trevorT", age: 28 },
        { username: "jeff", password: hashPassword2, name: "jeffG", age: 25 },
        { username: "ahmad", password: hashPassword3, name: "ahmadA", age: 32 },
        { username: "tim", password: hashPassword4, name: "timH", age: 37}
      ]);
    });

}
exports.seed = async function (knex, Promise) {

    await knex('userInfo').truncate()
        .then(function () {
            return knex('userInfo').insert([
                { firstName: 'tim', lastName: 'rogers', age: '40', date: '02052013', mood_id:1 },
                { firstName: 'brandon', lastName: 'sheffield', age: '42', date: '05212000', mood_id:2 }
            ]);
        });
}
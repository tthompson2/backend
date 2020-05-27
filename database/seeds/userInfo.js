exports.seed = async function (knex, Promise) {

    await knex('userInfo').truncate()
        .then(function () {
            return knex('userInfo').insert([
                { firstName: 'tim', lastName: 'rogers', age: '40', date: '02052013', mood_id:1 },
                { firstName: 'brandon', lastName: 'sheffield', age: '42', date: '05212000', mood_id: 2 },
                { firstName: 'trevor', lastName: 'thompson', age: '45', date: "0255454545", mood_id: 3},
                { firstName: 'jeff', lastName: 'glanville', age: '25', date: "02202019", mood_id: 4},
                { firstName: 'tim', lastName: 'hall', age: '27', date: '02282020', mood_id: 1}
            ]);
        });
}
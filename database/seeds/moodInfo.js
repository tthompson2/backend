exports.seed = async function (knex, Promise) {

    await knex('userInfo').truncate()
        .then(function () {
            return knex('moodInfo').insert([
                { date: '02052013', mood_id:1 },
                { date: '05212000', mood_id:2 }
            ]);
        });
}
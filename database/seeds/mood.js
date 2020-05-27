exports.seed = async function (knex, promise) {

    await knex('mood').truncate()
        .then(function () {

            return knex('mood').insert([
                { mood_after_sleep: 'meh' },
                { mood_after_sleep: 'happy' },
                { mood_after_sleep: 'excited' },
                { mood_after_sleep: 'angry' },
            ])
        })
}
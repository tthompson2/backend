const router = require('express').Router();
const bcrypt = require('bcryptjs');

router.post('/register', (req, res, next) => {

    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

})

router.post('/login', (req, res, next) => {
  let { username, password } = req.body;

})

// router.post('/logout', (req, res, next) => {

// })

module.exports = router;
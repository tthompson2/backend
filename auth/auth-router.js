const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require("../user/user-model");
const jwt = require("jsonwebtoken")

router.post('/register', async (req, res, next) => {

    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    }) 
    .catch(error => {
      console.log(user);
      res.status(500).json(error);
    })

})

router.post('/login', async (req, res, next) => {
  let { username, password } = req.body;

  Users.findBy({ username })
  .first()
  .then(user => {

    const tokenPayload = {
      username: user.username,
      userId: user.id
    }

    if(user && bcrypt.compareSync(password, user.password)) {
      // console.log(req.session.user)
      // req.session.user = username;
      res.status(200).json({
        message: `Welcome ${user.username}!`,
        token: jwt.sign(tokenPayload, process.env.secret)
      });
      
    } else {
      res.status(401).json({message: 'invalid credentials'});
    }
  })
  .catch(error => {
    console.log(username) 
    console.log(password)
    res.status(500).json(error);
  })

})

module.exports = router;
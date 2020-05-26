const router = require("express").Router();

const User = require("./userInfo-model");

router.get("/", (req, res, next) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
  .then(user => {
    res.json(user)
  })
  .catch(err => {
    res.send(err)
  })
})

router.post("/", (req, res, next) => {
    User.add(req.body)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router;
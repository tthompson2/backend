const router = require("express").Router();

const User = require("./user-model");

router.get("/", (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.post("/add", (req, res, next) => {

  const userInfo = req.body;

  User.add(userInfo)
  .then(saved => {
    res.status(201).json(saved)
  })
  .catch(error => {
    console.log(user)
    res.status(500).json(error)
  })

})

router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
  .then(user => {
    res.json(user)
  })
  .catch(err => {
    res.send(err)
  })
})

router.delete("/:id", (req, res, next) => {

  User.remove(req.params.id)
  .then(() => res.status(204).code)
  .catch((err) => next(err))

})

router.put("/:id", (req, res, next) => {
  User.putData(req.params.id, req.body)
  .then(() => res.status(204).code)
  .catch((err => next(err)))
}) 

module.exports = router;
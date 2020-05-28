const jwt = require("jsonwebtoken")
const {secret} = require("../config/secret")

module.exports = (req, res, next) => {

  const authError1 = {
    message: "Invalid credentials1"
  }

  const authError2 = {
    message: "Invalid credentials2"
  }

  try {
    const token = req.headers.authorization;
    console.log(token)
    if (!token) {
      return res.status(401).json(authError1);
    }
    jwt.verify(token, secret, (err, decodedPayload) => {
      if (err) {
        return res.status(401).json(authError2);
      }
      req.token = decodedPayload;
      next();
    });
  } catch (err) {
    next(err);
  }
};  
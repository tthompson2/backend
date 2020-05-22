module.exports = (req, res, next) => {
    if (req.session && req.session.user) {
      next();
    } else {
      res.status(401).json({ you: 'You need to login to be able to use the app!' });
    }
    
  };  
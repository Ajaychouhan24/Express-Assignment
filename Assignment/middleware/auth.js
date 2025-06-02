function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    return next();
  }
  res.redirect("/login");
}

function auth(req, res, next) {
  next();
}

module.exports = { isAuthenticated, auth };

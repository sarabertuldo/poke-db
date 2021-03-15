function isAuth(req, res, next) {
  // if(!req.user || req.user.username !== "Mitchell") {
  if (!req.user) {
    return (
      res
        .status(401)
        //.send("Nice try, person who isn't logged in")
        .send({
          success: false,
          data: null,
          error: "Invalid ",
        })
    );
  }
  next();
}

module.exports = isAuth;

function msg(req, res, next) {
  console.log("Mmmmmmmmiddleware");
  return next();
}

module.exports = msg;

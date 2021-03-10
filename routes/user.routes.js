const express = require("express");
const router = express.Router();
const user = require("../models/users.model");
const passport = require("passport");

router.get("authenticate", (req, res) => {
  if (!req.user) {
    return res.send({ success: false, data: null, error: null });
  }
  return res.send({
    success: true,
    data: { username: req.user.username },
    error: null,
  });
});

router.post("/signup", (req, res) => {
  user.signUp(res, req.body.username, req.body.password);
});

router.post("/login", (req, res) => {
  // user.login(res, req.body.username, req.body.password);
  // console.log(req.user);
  // res.send({success: true, data: "Mike", error: null})
  // passport.authenticate("local").. uses our local strategy to authenticate
  // (err, user, info) done function
  // can be "local-login" to have a specific name
  passport.authenticate("local", (err, user, info) => {
    // passport.authenticate("local-login")
    if (err) {
      return res.send({ success: false, data: null, error: err });
    }
    // info is our "Invalid message"
    if (!user) {
      return res.send({ success: false, data: null, error: info });
    }
    // req.login is specific to passport
    // serializing the user, save it
    req.login(user, (err) => {
      return res.send({
        success: true,
        data: { username: user.username },
        error: null,
      });
    });
    // requires req and res arguments
  })(req, res);
});

module.exports = router;

// router.post("/login", passport.authenticate("local"), (req, res) => {
//   res.send({
//     success: true,
//     data: { username: req.user.username },
//     error: null,
//   });
// -----user.login(res, req.body.username, req.body.password);
// passport.authenticate("local", (err, user, info) => {
//   console.log(user);
//   if (err) {
//     return res.send({ success: false, data: null, error: err });
//   }
//   if (!user) {
//     return res.send({ success: false, data: null, error: info });
//   }
//   return res.send({
//     success: true,
//     data: { username: user.username },
//     error: null,
//   });
// -----})(req, res);
// });

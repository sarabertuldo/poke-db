const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/isAuth");

router.post("/catchPkmn", isAuth, (req, res) => {
  return pkmn.catchPkmn(res, req.body, req.user.id);
});

router.all("/all", isAuth, (req, res) => {
  return pkmn.all(res);
});

router.get("/user", isAuth, (req, res) => {
  return pkmn.byUserID(res, req.user.id);
});

router.delete("/releasePkmn/:id", isAuth, (req, res) => {
  return pkmn.releasePkmn(res, req.params.id, req.user.id);
});

router.patch("/update", isAuth, (req, res) => {
  return pkmn.edit(res, req.body, req.user.id);
});

module.exports = router;

// router.patch("/update", (req, res) => {
//   return pkmn.edit(res, req.body);
// })

// router.get("/user/:id", (req, res) => {
//   console.log(req.user);
//   return pkmn.byUserId(res, req.body.userID);
// });

// router.delete("/delete/:id", (req, res) => {
//   return pkmn.remove(res, req.params.id);
// });

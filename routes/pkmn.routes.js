const express = require("express");
const router = express.Router();

router.post("/catchPkmn", (req, res) => {
  return pkmn.catchPkmn(res, req.body.username, req.body.password);
});

router.delete("/releasePkmn/:id", (req, res) => {
  return pkmn.releasePkmn(res, req.params.id);
});

router.all("/all", (req, res) => {
  return pkmn.all(res);
});

router.byUserId("/byUserID", (req, res) => {
  return pkmn.byUserId(res, req.body.userID);
});

module.exports = router;

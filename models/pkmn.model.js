const pool = require("../config/mysql.conf");

async function catchPkmn(res, pkmn) {
  if (
    !pkmn.pkmn ||
    pkmn.pkmn.length < 1 ||
    pkmn.pkmn.length > 24 ||
    isNaN(pkmn.userID)
  ) {
    throw "Invalid data provided";
  }
  try {
    await pool.query(
      "INSERT INTO pkmn (user_ID, pkmn, caught) VALUES (?, ?, false)",
      [pkmn.userID, pkmn.pkmn]
    );
    return res.send({
      success: true,
      data: "Successfully caught the Pokemon!",
      error: null,
    });
  } catch (error) {
    return res.send({ success: false, data: null, error: error });
  }
}

async function releasePkmn(res, id) {
  try {
    await pool.query("DELETE FROM pkmn WHERE pkmn.id = ?", [id]);
    return res.send({
      success: true,
      data: "Successfully released the Pokemon!",
      error: null,
    });
  } catch (error) {
    return res.send({ success: false, data: null, error: error });
  }
}

async function all() {
  try {
    const [pkmn] = await pool.query("SELECT * FROM pkmn");
    return res.send({
      success: true,
      data: pkmn,
      error: null,
    });
  } catch (error) {
    return res.send({ success: false, data: null, error: error });
  }
}

async function byUserID(res, userID) {
  try {
    const [pkmn] = await pool.query(
      "SELECT * FROM pkmn WHERE pkmn.user_ID = ?",
      [userID]
    );
    return res.send({
      success: true,
      data: "Successfully caught the Pokemon!",
      error: null,
    });
  } catch (error) {
    return res.send({ success: false, data: null, error: error });
  }
}

module.exports = { catchPkmn, releasePkmn, all, byUserID };

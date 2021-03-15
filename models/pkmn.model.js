const pool = require("../config/mysql.conf");

// add function
async function catchPkmn(res, poke, userID) {
  if (
    !poke.pkmn ||
    poke.pkmn.length < 1 ||
    poke.pkmn.length > 24 ||
    isNaN(userID)
  ) {
    throw "Invalid data provided";
  }
  try {
    await pool.query(
      "INSERT INTO pkmn (user_ID, poke, caught) VALUES (?, ?, false)",
      [userID, poke.pkmn]
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

// remove function
async function releasePkmn(res, id) {
  try {
    await pool.query(
      "DELETE FROM pkmn WHERE pkmn.id = ? AND pkmn.user_ID = ?",
      [id, userID]
    );
    return res.send({
      success: true,
      data: "Successfully released the Pokemon!",
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
      data: pkmn,
      error: null,
    });
  } catch (error) {
    return res.send({ success: false, data: null, error: error });
  }
}

module.exports = { catchPkmn, releasePkmn, byUserID };

const pool = require("../config/mysql.conf");

// add function
async function catchPkmn(res, pkmn, userID) {
  if (
    !pkmn.pkmn ||
    pkmn.pkmn.length < 1 ||
    pkmn.pkmn.length > 24 ||
    isNaN(userID)
  ) {
    throw "Invalid data provided";
  }
  try {
    await pool.query(
      "INSERT INTO pkmn (user_ID, pkmn, caught) VALUES (?, ?, false)",
      [userID, pkmn.pkmn]
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

// async function edit() {}
// async function edit(res, todo, userID) {
//   try {
//     // check for valid info
//     if (
//       isNaN(todo.id) ||
//       !todo.task ||
//       todo.task.length < 1 ||
//       todo.task.length > 40 ||
//       typeof todo.completed !== "boolean"
//     ) {
//       throw "Invalid data provided";
//     }
// try to update it
//     await pool.query(
//       "UPDATE todos SET task = ?, completed = ? WHERE id = ? AND user_ID = ?",
//       [pkmn.task, todo.completed, todo.id, userID]
//     );
//     // send success message
//     return res.send({
//       success: true,
//       data: "Successfully updated Pokemon",
//       error: null,
//     });
//   } catch (err) {
//     return res.send({
//       success: false,
//       data: null,
//       error: err,
//     });
//   }
// }

async function all(res) {
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

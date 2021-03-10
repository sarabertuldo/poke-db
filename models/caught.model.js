const pool = require("../config/mysql.conf");

async function add(res, favorite, userID) {
  try {
    // check that they gave us a userID
    // check that they gave us a task between 1 and 40 characters
    if (
      !favorite.gif_id ||
      favorite.gif_id.length < 1 ||
      //   todo.task.length > 40 ||
      isNaN(userID)
    ) {
      throw "Invalid data provided";
    }
    // try to add it
    await pool.query(
      "INSERT INTO favorites (user_ID, gif_id, title, url) VALUES (?,?,?,?)",
      [userID, favorite.gif_id, favorite.title, favorite.url]
    );
    // if successful send a success message
    return res.send({
      success: true,
      data: "Successfully Added the Todo",
      error: null,
    });
  } catch (err) {
    console.log(err);
    // send an error message
    return res.send({
      success: false,
      data: null,
      error: err,
    });
  }
}

async function remove(res, id, userID) {
  try {
    // try to delete
    await pool.query(
      "DELETE FROM favorites WHERE favorites.id = ? AND favorites.user_ID = ?",
      [id, userID]
    );
    // if successful send a success message
    return res.send({
      success: true,
      data: "Successfully Deleted",
      error: null,
    });
  } catch (err) {
    return res.send({
      success: false,
      data: null,
      error: err,
    });
  }
}

async function edit(res, favorite, userID) {
  try {
    // check for valid info
    if (
      isNaN(todo.id) //||
      //   !todo.task ||
      //   todo.task.length < 1 ||
      //   todo.task.length > 40 ||
      //   typeof todo.completed !== "boolean"
    ) {
      throw "Invalid data provided";
    }
    // try to update it
    await pool.query(
      "UPDATE todos SET gif_id = ?, url = ?, title = ? WHERE id = ? AND user_ID = ?",
      [favorite.gif_id, favorite.url, favorite.title, favorite.id, userID]
    );
    // send success message
    return res.send({
      success: true,
      data: "Successfully updated the todo",
      error: null,
    });
  } catch (err) {
    return res.send({
      success: false,
      data: null,
      error: err,
    });
  }
}

async function all(res) {
  try {
    // get by userID
    const [favorites] = await pool.query("SELECT * FROM favorites");
    // send success message
    res.send({
      success: true,
      data: favorites,
      error: null,
    });
  } catch (err) {
    return res.send({
      success: false,
      data: null,
      error: err,
    });
  }
}

async function byUserID(res, userID) {
  try {
    // get by userID
    const [
      favorites,
    ] = await pool.query(
      "SELECT * FROM favorites WHERE favorites.user_ID = ?",
      [userID]
    );
    // send success message
    res.send({
      success: true,
      data: favorites,
      error: null,
    });
  } catch (err) {
    return res.send({
      success: false,
      data: null,
      error: err,
    });
  }
}

module.exports = { add, remove, edit, all, byUserID };

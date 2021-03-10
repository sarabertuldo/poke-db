// const Pool = require("mysql2/typings/mysql/lib/Pool");
const passport = require("passport");
const pool = require("./mysql.conf");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

function isInvalid(val, min, max) {
  return !val || val.length < min || val > max;
}

// handle login
// non arrow function way
// passport.use(new LocalStrategy(async function (username, password, done) {...
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      if (isInvalid(username, 8, 16) || isInvalid(password, 8, 20)) {
        return done(null, false, "Invalid data provided");
      }
      let [
        users,
      ] = await pool.query("SELECT * FROM users WHERE users.username = ?", [
        username,
      ]);
      if (users.length === 0) {
        return done(null, false, "Invalid username");
      }
      const match = await bcrypt.compare(password, users[0].password);
      if (!match) {
        return done(null, false, "Invalid password");
      }
      return done(null, users[0]);
    } catch (err) {
      return done(err, false);
    }
  })
);

// serialize in some way
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// // deserialize in some way
passport.deserializeUser(async function (id, done) {
  try {
    const [user] = await pool.query("SELECT * FROM users WHERE users.id = ?", [
      id,
    ]);
    // if there is one ???
    if (!user[0]) {
      return done(null, false);
    }
    return done(null, user[0]);
    // if there isn't one ???
  } catch (err) {
    done(err, false);
  }
});

// handle signup???

// handle middleware

// export to anywhere else we need it

module.exports = passport;

// async function login(res, username, password) {
//     try {
//       if (isInvalid(username, 8, 16) || isInvalid(password, 8, 20)) {
//         throw "Invalid Data Provided";
//       }
//       let [
//         users,
//       ] = await pool.query("SELECT * FROM users WHERE users.username = ?", [
//         username,
//       ]);
//       if (users.length === 0) {
//         throw "Invalid username or password";
//       }
//       const match = await bcrypt.compare(password, users[0].password);
//       if (!match) {
//         throw "Invalid password";
//       }
//       res.send({
//         success: true,
//         data: { username: users[0].username },
//         error: null,
//       });
//     } catch (err) {
//       return res.send({ success: false, data: null, error: err });
//     }
//   }

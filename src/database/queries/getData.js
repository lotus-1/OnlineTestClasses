const databaseConnection = require("../db_connection.js");

const getData = (name, cb) => {
  databaseConnection.query("SELECT * FROM students WHERE full_name=($1)", [name], (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getData;

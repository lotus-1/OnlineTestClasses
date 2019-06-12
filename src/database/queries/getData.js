const databaseConnection = require("../db_connection.js");

const getData = cb => {
  databaseConnection.query("SELECT * FROM students", (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getData;

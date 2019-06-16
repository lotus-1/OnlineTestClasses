const databaseConnection = require("../db_connection.js");

const postData = (username, password, email, cb) => {
  databaseConnection.query(
    "INSERT INTO students (full_name, password, email ) VALUES ($1, $2, $3)",
    [username, password, email],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = postData;

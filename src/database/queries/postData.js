const databaseConnection = require("../db_connection.js");

const postData = (name, location, cb) => {
  databaseConnection.query(
    "INSERT INTO students (student_id, full_name, email, password ) VALUES ($1, $2, $3, $4)",
    [student_id, full_name, email, password],
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

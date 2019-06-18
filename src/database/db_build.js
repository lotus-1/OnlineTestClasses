const fs = require('fs');
const connection = require('./db_connection');

const buildDatabase = () => {
  const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err, "error");
    } else {
      console.log("database created");
      console.log(result);
      connection.end(() => {
        console.log('connection closed');
      })
    }
  });
};

buildDatabase();

module.exports = buildDatabase;

const fs = require('fs');
const connection = require('./db_connection');

const buildDatabase = () => {
  const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err, "error");
    } else {
      console.log("database created");
      connection.end(() => {
        console.log('connection closed');
      })
    }
  });
};

buildDatabase();

//
//
// const runDbBuild = cb => {
//   dbConnection.query(sql, (err, res) => {
//     if (err) return cb(err);
//     cb(null, res);
//   })
// }
//
// module.exports = runDbBuild;


module.exports = buildDatabase;

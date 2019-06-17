const tape = require("tape");
const buildDatabase = require('../src/database/db_build');
const getData = require("../src/database/queries/getData");
const postData = require("../src/database/queries/postData");
const request = require('supertest');


tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape("getData", t => {
buildDatabase(function(err, res) {
    t.error(err, "No Error");
    //Assert that db_build finished successfully with no errors

    let expected = [
      {
        student_id: 20076678,
        full_name: 'Enass Kmal',
        email: 'enass@gmail.com',
        password: '123456'
      }
    ];

    getData((err, result) => {
      console.log("this inside the 2 test");
      if (err) console.log(err);
      t.deepEqual(result, expected, "Returns expected data");
      t.end();
    });
  });
});



tape('Adds a new student', t => {
  const newStudent = {  };
  request(buildDatabase)
  .post(`/home/database/newStudent`)
  .send(newStudent)
  .expect(201)
  .expect('Content-Type', /json/)
  .end((err, res) => {
    t.error(err, 'An error');
    t.equal(res.body[0].firstname, 'Alec', 'Alec is added to the api');
    t.end();
  })
})

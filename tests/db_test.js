
const tape = require('tape');
const request = require('supertest');
const app = require('../src/database/db_build');

tape("Tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape('Adds a new student', t => {
  const newStudent = { firstname: 'Alec', lastname: 'Lightwood', class: '7th grade', email: 'AlecLightwood@gmail.com' };
  request(app)
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


// test('Should add a new facster', t => {
//   const facTwelver = { firstname: 'jason', surname: 'bourne', cohort: 12 };
//   request(app)
//     .post(`/v1/api/facster/new`)
//     .send(facTwelver)
//     .expect(201)
//     .expect('Content-Type', /json/)
//     .end((err, res) => {
//       t.same(res.statusCode, 201, 'Status code is 201');
//       t.error(err, 'No error');
//       t.same(res.body[0].firstname, 'jason', 'Should add JSON bourne to FAC');
//       t.end();
//     });

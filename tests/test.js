
const tape = require('tape');
const request = require('supertest');
const app = require('../src');

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape('All routes should return the expected result', t => {
  request(app)
  .get('/home/7/Arabic-1/')
  .expect(200)
  .end((err, res) => {
    t.error(err, 'No error');
    t.equal(res.statusCode, 200, 'statusCode is 200');
    t.end();
  })
})

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

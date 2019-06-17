
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
  const newStudent = { student_id: 20076124, full_name: 'yosef hasan', email: 'yosef@gmail.com', password: 55555545 };
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

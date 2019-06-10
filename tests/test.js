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

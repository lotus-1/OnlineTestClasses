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


// test('Home route returns a status code of 200', (t) => {
//   supertest(router)
//       .get("/")
//       .expect(200)
//       .expect('Content-Type', /html/)
//       .end((err, res) => {
//         t.error(err, 'There is no ERROR');
//         t.equal(res.statusCode, 200, 'The app should return 200 statusCode');
//         t.end();
//       });
// });

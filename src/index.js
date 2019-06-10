const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('The app is running on port', app.get('port'));
});

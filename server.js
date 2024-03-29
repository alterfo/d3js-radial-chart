var connect = require('connect')
  , http = require('http')
  , app
  ;

app = connect()
  .use(connect.static('app'))
  .use('/node_modules', connect.static('node_modules'))
  .use('/test', connect.static('app'))
  ;

http.createServer(app).listen(8080, function() {
  console.log('Running on http://localhost:8080');
});

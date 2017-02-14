var express = require('express');
var user = require('./routers/user');

// view  path
var path = require('path');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   //res.send('Hello World');
   res.render('pages/index_v1');
});

app.get('/list_user',function (req, res) {
	//res.send('index');
	res.render('pages/index');
});

app.use('/predict', user);

var server = app.listen(3000, function() {
  console.log('Listening on port 3000')
});


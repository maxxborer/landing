var express = require('express')
  , http = require('http')
  , compression = require('compression')
  , path = require('path')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , methodOverride = require('method-override');

require('dotenv').config()

var app = express();

app.use(compression())
app.set('port', process.env.PORT || 80);
app.use(favicon(__dirname + '/public/android-chrome-192x192.png'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

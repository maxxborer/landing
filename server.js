var express = require('express')
  , http = require('http')
  , compression = require('compression')
  , path = require('path')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , methodOverride = require('method-override');

var app = express();

app.use(compression())
app.set('port', process.env.PORT || 80);
app.use(favicon(__dirname + '/public/favicon-196x196.png'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

// app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

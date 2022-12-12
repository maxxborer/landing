var express = require('express')
  , http = require('http')
  , compression = require('compression')
  , path = require('path')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , methodOverride = require('method-override');
  // , memjs = require('memjs');

require('dotenv').config()

var app = express();

app.use(compression())
app.set('port', process.env.PORT || 80);
app.use(favicon(__dirname + '/public/favicon-196x196.png'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// var mc = memjs.Client.create(process.env.MEMCACHIER_SERVERS, {
//   failover: true,  // default: false
//   timeout: 1,      // default: 0.5 (seconds)
//   keepAlive: true  // default: false
// })

app.get('/', function(req,res){
  // mc.set('root', res, { expires: 600 });
  res.sendFile(path.join(__dirname + '/index.html'));
  // mc.get('root');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var express = require('express');
var app = express();
var request = require('request');
var fs = require('fs');
var port = process.env.PORT || 8000;

app.set('view engine', 'ejs');

//Express will use the /public directory for css, js and images
app.use(express.static(__dirname + '/public'));

var posts ={};



//homepage
app.get('/', function(req, res) {
  res.render('index', {posts: posts});
});

var GodelEscherBach = require('./routes/GodelEscherBach');
posts.GodelEscherBach = GodelEscherBach.metaData;
app.use('/GodelEscherBach', GodelEscherBach.router);

var SimplexNoise = require('./routes/SimplexNoise');
posts.SimplexNoise = SimplexNoise.metaData;
app.use('/SimplexNoise', SimplexNoise.router);

var DnDTables = require('./routes/DnDTables');
posts.DnDTables = DnDTables.metaData;
app.use('/DnDTables', DnDTables.router);

var InfiniteMonkeys = require('./routes/InfiniteMonkeys');
posts.InfiniteMonkeys = InfiniteMonkeys.metaData;
app.use('/InfiniteMonkeys', InfiniteMonkeys.router);

var Photography = require('./routes/Photography');
posts.Photography = Photography.metaData;
app.use('/Photography', Photography.router);

//Anything else
app.get('*', function(req, res) {
  res.render('404');
});

app.listen(port, function() {
    console.log('Running on http://localhost:' + port);
});

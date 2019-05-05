var express = require('express');
var router = express.Router();

var lastUpdate = new Date('5/4/2019');
lastUpdate = new Date(lastUpdate.getTime() - (lastUpdate.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];

var metaData = {
  'txt':'While reading through the book, I will be recreating the ideas it presents into Javascript and giving commentary on the chapters.',
  'url':'/GodelEscherBach',
  'btnTxt':'Read',
  'date':lastUpdate,
  'title':'Godel Escher Bach',
  'imageSrc':'/img/geb.jpg',
  'keywords':['academic','godel','escher','bach','recursion','math','literature','books','writing','learning','educational']
};


// middleware that is specific to this router
router.use(function(req, res, next) {
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('GEB');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About GEB');
});

module.exports = {
  router:router,
  metaData:metaData
};

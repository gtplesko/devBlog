var express = require('express')
var router = express.Router()

var lastUpdate = new Date('5/5/2019');
lastUpdate = new Date(lastUpdate.getTime() - (lastUpdate.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];

var metaData = {
  'txt':'A collection of photography done by me.',
  'url':'/Photography',
  'btnTxt':'Read',
  'date':lastUpdate,
  'title':'Photography',
  'imageSrc':'/img/roswell.jpg',
  'keywords':['art','gallery','photography','pictures']
};


router.use(function(req, res, next) {
  next();
});
//uses the prefix added in app.js as a root.
router.get('/', function(req, res) {
  res.send('Homepage here');
});
router.get('/about', function(req, res) {
  res.send('Additional Route.');
});

module.exports = {
  router:router,
  metaData:metaData
};

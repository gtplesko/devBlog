var express = require('express')
var router = express.Router()

var lastUpdate = new Date('5/4/2019');
lastUpdate = new Date(lastUpdate.getTime() - (lastUpdate.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];

var metaData = {
  'txt':'Initial project using Simplex Noise. May be turned into multiple projects later, but for now this is just an exploration into how I can use noise.',
  'url':'/SimplexNoise',
  'btnTxt':'Read',
  'date':lastUpdate,
  'title':'Simplex Noise',
  'imageSrc':'/img/noise.jpg',
  'keywords':['procedural', 'generation', 'noise', 'simplex', 'experiment']
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

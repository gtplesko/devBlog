var express = require('express')
var router = express.Router()

var lastUpdate = new Date('5/4/2019');
lastUpdate = new Date(lastUpdate.getTime() - (lastUpdate.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];

var metaData = {
  'txt':'A genetic Algorithm in Javascript that allows users to manipulate settings with exposed and clear code.',
  'url':'/InfiniteMonkeys',
  'btnTxt':'Read',
  'date':lastUpdate,
  'title':'Infinite Monkeys',
  'imageSrc':'/img/monkeys.jpg',
  'keywords':['genetic', 'algorithm', 'monkeys', 'shakespear', 'javascript', 'js', 'educational']
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

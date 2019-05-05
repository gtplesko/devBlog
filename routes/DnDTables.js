var express = require('express')
var router = express.Router()

var lastUpdate = new Date('5/4/2019');
lastUpdate = new Date(lastUpdate.getTime() - (lastUpdate.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];

var metaData = {
  'txt':'An elaborate content management system to allow users to utilize combinatorics to generate everything from the description of a potato to the history of a universe.',
  'url':'/DnDTables',
  'btnTxt':'Read',
  'date':lastUpdate,
  'title':'Dungeons & Data',
  'imageSrc':'/img/dnd.jpg',
  'keywords':['dungeons', 'dragons', 'content', 'users', 'cms', 'combinatorics', 'project']
};


router.use((req, res, next)=> {
  next();
});
//uses the prefix added in app.js as a root.
router.get('/', (req, res)=> {
  res.send('Homepage here');
});
router.get('/about', (req, res)=> {
  res.send('Additional Route.');
});

module.exports = {
  router:router,
  metaData:metaData
};

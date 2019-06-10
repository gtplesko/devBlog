var express = require('express')
var router = express.Router()

var lastUpdate = new Date('5/13/2019');
lastUpdate = new Date(lastUpdate.getTime() - (lastUpdate.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];


router.use(function(req, res, next) {
  next();
});
//uses the prefix added in app.js as a root.
router.get('/', function(req, res) {
  res.render('index', {posts:global.posts});
});
router.get('/:id', function(req, res) {
  console.log(global.posts, req.params.id);
  res.render('article', {post:global.posts[req.params.id]});
});

module.exports = {
  router:router
};

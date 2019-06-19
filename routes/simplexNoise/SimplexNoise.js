var express = require('express');
var router = express.Router();

// var simplex = new SimplexNoise(),
//     value2d = simplex.noise2D(x, y),
//     value3d = simplex.noise3D(x, y, z),
//     value4d = simplex.noise4D(x, y, z, w);

var lastUpdate = new Date('6/16/2019');
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
  'longTxt':'<p>     Simplex Noise is a method for generating random values that are similar to other points in proximity.     Using noise, games like Minecraft and other procedural generated games have managed to make a world of     discovery in a complex worlds using rules and algorithms to determine how to read the noise.   </p>      <p>       I hope to implement a variety of projects based on simplex noise, many have been done before.       I want to start building a framework for procedural generation that I can bend into new shapes for whatever purposes I have.       My earliest projects are going to be involved with ways to traverse Simplex Noise to create different effects.       For example, if I do a simple growing spiral in 2d noise the values at the start will be all very similar to each other,       but as it grows it will slowly reach the full rate of randomness of simplex noise.       If we travel in a circle, we will know that the effect will loop, allowing us to have predictable patterns.       Likewise if we travel in a square we will effectively have the same effect.   </p>      <p>       An interesting idea is that if we use the same noise for multiple things we could at some point       use proximity between two procedural generators to make things that seem to be influence by each other.       If we are to use a circle to create a loop, we could use the values along the circle as notes in a song,        but then could make another circle with a slightly larger radius and codify notes to a slighlty lower value.        This would allow the bass line to have similar shape to the melody.        We could also use two generators in the shape of squares, with a shared edge.        This would be great for tiling irregular shapes together.   </p>   <p>       Ultimately my motivation for this is that I can make a library of functions that I can refer to in my other project,       Godel Escher Bach.   </p>   ',
  'keywords':['procedural', 'generation', 'noise', 'simplex', 'experiment']
};


router.use(function(req, res, next) {
  next();
});
//uses the prefix added in app.js as a root.

var main = require('./main.js');

router.get('/', function (req, res) {
  res.render('canvas',  {utility:'/js/simplex/noise.js', driver:"/js/simplex/simplex-noise.js"});
});
router.get('/data', function (req, res) {
  res.send(main.worleyPixels);
});
router.get('/about', function(req, res) {
  res.redirect('/Article/SimplexNoise');
});

module.exports = {
  router:router,
  metaData:metaData
};

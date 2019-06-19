let canvas;
let noise;
let curZoom = 1;
let curSeed = 1;
let xOff = 0;
let yOff = 0;
let z = 25;
let waterLevel = 0.25;
let count = 0;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight).canvas;
  noStroke();
  angleMode(DEGREES)
  noise = new gNoise(0, 2, 0.1, 0.1, 2, 0.5);
  noise.processOctave(windowWidth, windowHeight, z, curZoom, xOff, yOff);
}
function mouseDragged() {
  xOff += (pmouseX-mouseX)/noise.tileSize /curZoom/10;
  yOff += (pmouseY-mouseY)/noise.tileSize /curZoom/10;
  noise.processOctave(windowWidth, windowHeight, z, curZoom, xOff, yOff);
  return false;
}

function mouseWheel(event) {
  //move the square according to the vertical scroll amount
  curZoom -= event.delta/3;
  if(curZoom >1 && curZoom < 64){
    noise.octaves = Math.floor(curZoom+1);
  }
  else if(curZoom >= 64){
    noise.octaves = 65;
    curZoom = 64;
  }
  else{
    noise.octaves = 2;
    curZoom = 1;
  }
  noise.processOctave(windowWidth, windowHeight, z, curZoom, xOff, yOff);
  //uncomment to block page scrolling
  return false;
}



function draw() {
  waterLevel = (Math.sin(0.0001*count++)+1)/2;
  z = 0.001 + z;
  xOff = 0.0001 + xOff;
  noise.processOctave(windowWidth, windowHeight, z, curZoom, xOff, yOff);
  // if(document.getElementById("zControl").value*increment*0.01!=zNudge){
  //   zNudge = document.getElementById("zControl").value*increment*0.01;
  //   noise.processOctave();
  // }
}
/*

  //all functions low to high, assume n is 0 to 1                     color changes based on:
  var beach = ['#737141', '#949265', '#b7b48a', '#dad8b1', '#fffdda']; // height difference rate
  var water = ['#051937', '#153564', '#265594', '#3477c8', '#3f9bff']; // depth
  var grass = ['#a9c851', '#90c243', '#73bc38', '#50b62f', '#0daf29']; // moisture
  var mountain = ['#a49843', '#87b87e', '#80cfbe', '#a7dfec', '#deeeff']; // elevation
  var city = ['#aa00aa', '#bb00bb','#cc00cc','#dd00dd','#ee00ee']; // city


*/
function terrain(elevation, moisture, population){
  //all functions low to high, assume n is 0 to 1                     color changes based on:
  var beach = ['#737141', '#949265', '#b7b48a', '#dad8b1', '#fffdda']; // height difference rate
  var water = ['#051937', '#153564', '#265594', '#3477c8', '#3f9bff']; // depth
  var grass = ['#a9c851', '#90c243', '#73bc38', '#50b62f', '#0daf29']; // moisture
  var mountain = ['#a49843', '#87b87e', '#80af9e', '#a7bfec', '#feeeff']; // elevation
  var city = ['#779', '#88a','#99b','#aac','#bbd']; // city
  var curColor = "#ffffff";
  if (moisture*waterLevel - elevation > 1 || elevation*0.4 < 0.3*waterLevel){
    curColor = tColor(elevation, water);
  } else if (population > 0.7 && moisture*waterLevel < 0.5 && moisture*waterLevel > 0.4){
    curColor = tColor((elevation+moisture)/2, city);
  } else if(moisture/2+waterLevel - elevation * 0.2 > 0.3 && elevation > 0.4){
    curColor = tColor(moisture, grass);
  } else if (elevation > 0.8){
    curColor = tColor((elevation+moisture)/2, mountain);
  } else{
  curColor = tColor(elevation, beach);
  }
  return curColor;
}
let tColor = function (val, type){
  return(type[Math.ceil(val*type.length-1)]); // should be value * type . length ????
}
function processWorld(){
//todo use another z offset to populate world with stuff

}
class gNoise{
  //0, 2, 0.1, 0.1, 2, 0.6
  constructor(seed, oct, freq, amp, lac, pers){
    this.seed = seed;
    this.octaves = oct;
    this.frequency = freq;
    this.amplitude = amp;
    this.lacunarity = lac;
    this.persistance = pers;
    this.noise = new OpenSimplexNoise(seed);
    this.tileSize = windowWidth/100; // reduce noise to generate
  }
  processOctave(w, h, d, zoom, xoff = 0, yoff=0){
  background(0,0,0);
  zoom = zoom > 0 ? 1/zoom : 0.0001; //avoid dividing by zero
    for (let x = -this.tileSize; x*this.tileSize < w+this.tileSize; x++) {
      for (let y = -this.tileSize; y*this.tileSize < h+this.tileSize; y++) {
        //define outside of octave loop
        let e = 0; //elevation
        let m = 0; //moisture
        let p = 0; //population
          for(let i = 0; i<this.octaves; i++){
            var lac = Math.pow(this.lacunarity, i); // value to effect noise scale based on octave
            var pers = Math.pow(this.persistance, i);// value to effect noise effect based on octave
            var a =lac * xoff + (x * this.frequency * lac) * zoom; // x value assignment
            var b =lac * yoff + (y * this.amplitude * lac) * zoom; // y value assignment
            var c = seededRandom(i+1);                             // z value assignment, +1 because 0 would not return a random value.
            e += this.noise.noise3D(a, b, c+d*0.2) * pers; // elevation noise value
            m += this.noise.noise3D(a, b, c+d) * pers; // moisture noise value, offset by constant amount because we want relation with elevation
            p += this.noise.noise3D(a, b, c+d*0.5) * pers; // population value is very similar to moisture value
          } // Octaves processed

        e = (e+1)/2;     // normalize between 0,1
        m = ((m-1)/2)*-1;// normalize between 1,0
        p = ((p-1)/2)*-1;// normalize between 1,0
        //because of octaves a value may become > 1 or < 0, so we clamp them here.
        e = e > 1 ? 1 : e;
        m = m > 1 ? 1 : m;
        p = p > 1 ? 1 : m;
        p = p < 0 ? 0.000001 : e;
        e = e < 0 ? 0.000001 : e;
        m = m < 0 ? 0.000001 : m;
        fill(terrain(e,m,p));
        hexagon(x*this.tileSize, y*this.tileSize, this.tileSize+6.2, this.tileSize*-0.01*(x%2), this.tileSize*0.5*(x%2));
      }
    }
  }
}
function hexagon(x,y,s,xOff = 0,yOff = 0){
  var r = s/2;
  var points = 6;
  var angle = 2 * PI / points;
  beginShape();
  for(i = 0; i < points; i++) {
    px = r * Math.cos(angle * i);
    py = r * Math.sin(angle * i);
    vertex(px+x+xOff,py+y+yOff);
  }
  endShape(CLOSE);
}
function radialRender(neighbors, x, y, r) {
  let rs = r;
  while (r > 0){
    r--;
    neighbors[x-r][y-r]
  }
}
function seededRandom(seed) {
		var x;
    do {
			x = Math.sin(seed++) * 10000;
      x = x - Math.floor(x);
    } while(x < 0.15 || x > 0.9);
    return (x-0.15) * 1 / 0.75;
}

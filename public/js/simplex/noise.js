let canvas;
let noise;
let curZoom = 1;
let curSeed = 1;
let xOff = 0;
let yOff = 0;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight).canvas;
  noStroke();
  noise = new gNoise(0, 2, 0.1, 0.1, 3, 0.5);
  noise.processOctave(windowWidth, windowHeight, 255, curZoom, xOff, yOff);
}
function mouseDragged() {
  xOff += (pmouseX-mouseX)/noise.tileSize /curZoom/10;
  yOff += (pmouseY-mouseY)/noise.tileSize /curZoom/10;
  console.log(xOff,yOff);
  noise.processOctave(windowWidth, windowHeight, 255, curZoom, xOff, yOff);
  return false;
}

function mouseWheel(event) {
  //move the square according to the vertical scroll amount
  curZoom -= event.delta/3;
  if(curZoom >1 && curZoom < 16){
    noise.octaves = Math.floor(curZoom);
  }
  else if(curZoom >= 16){
    noise.octaves = 16;
    curZoom = 16;
  }
  else{
    noise.octaves = 1;
    curZoom = 1;
  }
  noise.processOctave(windowWidth, windowHeight, 255, curZoom, xOff, yOff);
  //uncomment to block page scrolling
  return false;
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}


function draw() {

  // if(document.getElementById("zControl").value*increment*0.01!=zNudge){
  //   zNudge = document.getElementById("zControl").value*increment*0.01;
  //   noise.processOctave();
  // }
}

function ground(num){
  if(num > 0.965 && num <= 1){
    return color(200/(num*2)+30, 200/(num*2)+30, 200/(num*2)+55)
  } else if(num > 0.501 && num < 0.54){
    return color("#CCDCE0")
  }
  return color(200/(num*3)+55, num * 155 + 100, 200/(num*3))
}
function water(num){
  return color(num*70+60, num*10+80 , num *500 + 110)
}
function processWorld(){
//todo use another z offset to populate world with stuff

}
class gNoise{
  constructor(seed, oct, freq, amp, lac, pers){
    this.seed = seed;
    this.octaves = oct;
    this.frequency = freq;
    this.amplitude = amp;
    this.lacunarity = lac;
    this.persistance = pers;
    this.noise = [];
    for(let i = 0; i<16; i++ ){
      this.noise[i] = new OpenSimplexNoise(seed+i);
    }
    this.tileSize = windowWidth/200; // reduce noise to generate
  }
  update(seed, oct, freq, amp, lac, pers){
    this.seed = seed;
    this.octaves = oct;
    this.frequency = freq;
    this.amplitude = amp;
    this.lacunarity = lac;
    this.persistance = pers;
    this.noise = [];
    for(let i = 0; i<16; i++ ){
      this.noise[i] = new OpenSimplexNoise(seed+i);
    }
    this.tileSize = windowWidth/200; // reduce noise to generate
  }
  processOctave(w, h, d, zoom, xoff = 0, yoff=0){
  zoom = zoom > 0 ? 1/zoom : 0.0001; //avoid dividing by zero
    for (let x = 0; x*this.tileSize < w; x++) {
      for (let y = 0; y*this.tileSize < h; y++) {
        let n = 0;
          for(let i = 0; i<this.octaves; i++){
          // console.log(x,y)
          n += this.noise[i].noise3D(
            ((Math.pow(this.lacunarity, i))*xoff) + (x * this.frequency * (Math.pow(this.lacunarity, i))) * zoom,
            ((Math.pow(this.lacunarity, i))*yoff) + (y * this.amplitude * (Math.pow(this.lacunarity, i))) * zoom,
            d)* (Math.pow(this.persistance, i));
        }
        n=(n+1)/2;
      fill(n > 0.5 ? ground(n) : water(n));
      square(x*this.tileSize,y*this.tileSize,this.tileSize+0.5);
      }
    }
  }
}

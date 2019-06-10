let counter = 0;

let increment = 0.01;

let zoff = 0;
let xoff = 0;
let yoff = 0;
let lastVal = 0;
let zoom = 2;

let xNudge = 0;
let yNudge = 0;
let zNudge = 0;


let noise;
let canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight).canvas;
  noise = new OpenSimplexNoise(lastVal);
}
function mouseDragged() {
  xNudge+= ((pmouseX-mouseX)*increment)/20*zoom;
  yNudge+= ((pmouseY-mouseY)*increment/20*zoom);
  console.log((mouseX-pmouseX)*increment,(mouseY-pmouseY)*increment)
  return false;
}

function mouseWheel(event) {
  print(zoom);
  //move the square according to the vertical scroll amount
  zoom += event.delta/50;
  //uncomment to block page scrolling
  return false;
}
function draw() {
  if(document.getElementById("seed").value!=lastVal){
    noise = new OpenSimplexNoise(document.getElementById("seed").value);
  }
  // if(document.getElementById("zoom").value/200!=increment){
  //   zoom = document.getElementById("zoom").value/200;
  // }
  // if(document.getElementById("xControl").value*increment!=xNudge){
  //   xNudge = document.getElementById("xControl").value*increment;
  // }
  // if(document.getElementById("yControl").value*increment!=yNudge){
  //   yNudge = document.getElementById("yControl").value*increment;
  // }
  // if(document.getElementById("zControl").value*increment*0.01!=zNudge){
  //   zNudge = document.getElementById("zControl").value*increment*0.01;
  // }

  xoff = 0;
  for (let x = 0; x*20 < width; x++) {
    yoff = 0;
    for (let y = 0; y*20 < height; y++) {
      let n;
      n = (noise.noise3D((xoff+xNudge), (yoff+yNudge), zoff+zNudge)+1)/2;
      fill(n > 0.5 ? ground(n) : water(n));
      square(x*20,y*20,20)
      yoff += increment*zoom;
    }
    xoff += increment*zoom;
  }
  counter++;
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

var w = window.innerWidth;
var h = window.innerHeight;

function preload() {

}

function setup(){
    frameRate(60)
    var canvas = createCanvas(w, h)
    canvas.parent('vis')
}

function draw(){
    background(50);
}

function windowResized() {
    resizeCanvas(w, h);
  }
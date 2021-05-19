let img;

function preload() {
  img = loadImage("assets/Ball01.jpg");
}

function draw() {
  image(img, 0, 0, 100, 100);
}
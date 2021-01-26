//make all the variables that you require
var canvas
var sea, boat, man





function setup() {
  canvas = createCanvas(1000, 800);
  sea = createSprite(400, 500, 1000, 20);
  sea.x = sea.width / 2;
  boat = createSprite(83, 485, 100, 50);
  man = createSprite(88, 455, 50, 40);
}

function draw() {
  background(255, 255, 255);
  text(mouseX + "," + mouseY, mouseX, mouseY)
  sea.velocityX = -4
  if (sea.x < 600) {
    sea.x = sea.width / 2
  }
  spawnClouds();
  drawSprites();
}

function spawnClouds() {
  if (frameCount % 200 === 0) {
    var clouds = createSprite(957, 98, 30, 30)
    clouds.y = Math.round(random(80, 300))
    clouds.velocityX = -3;
  }

}
//make function spawnstars
//make function spawnFish
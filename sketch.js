var car, wall;
var speed, weight;

function setup() {
  createCanvas(1500,400);

  car=createSprite(50, 200, 50, 50);
  car.shapeColor="white"

  wall=createSprite(1400, 200, 60, height/2);

  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;
}

function draw() {
  background(0);  
  
  car.collide(wall);
 
  if (wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;

    if (deformation<100){
      car.shapeColor="green";
    }

    if (100<deformation && deformation<180){
      car.shapeColor="yellow";
    }

    if (deformation>180){
      car.shapeColor="red";
    }
  }
  drawSprites();
}
 
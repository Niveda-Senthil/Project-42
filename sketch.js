var iss, spacecraft;
var bg, model1, sc1, sc2, sc3, sc4;
var hasDocked = false;


function preload() {
  bg = loadImage("spacebg.jpg");
  model1 = loadImage("iss.png");
  sc1 = loadImage("spacecraft1.png");
  sc2 = loadImage("spacecraft2.png");
  sc3 = loadImage("spacecraft3.png");
  sc4 = loadImage("spacecraft4.png");
}


function setup() {

  createCanvas(600,350);
  spacecraft = createSprite(285, 240);
  spacecraft.addImage(sc1);
  spacecraft.scale = 0.15;

  iss = createSprite(330, 168);
  iss.addImage(model1);
  iss.scale = 0.60;
}

function draw() {
  background(bg);  

  spacecraft.addImage(sc1);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1, 1);

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y - 2;
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(sc2);
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(sc3);
      spacecraft.x = spacecraft.x - 1;
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(sc4);
      spacecraft.x = spacecraft.x + 1;
    }
  }

  if(spacecraft.y<=(iss.y + 45)&& spacecraft.x<=(iss.x - 10)){
    hasDocked = true;
    textSize(25);
    fill("yellow");
    text("Docking is Successful", 200, 300);
  }
  drawSprites();
}


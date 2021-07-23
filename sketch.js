//bloon=blueBalloon,gloon=greenBalloon,ploon=pinkBalloon,rloon=redBalloon
var bow , background;
var bowImage, backgroundImage;
var bloon,bloonimage,gloon,gloonimage,ploon,ploonimage,rloon,rloonimage;
var arrow,arrowImage;


function preload(){
 
  backgroundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");

    bloonimage = loadImage("blue_balloon0.png");
    gloonimage = loadImage("green_balloon0.png");
    ploonimage = loadImage("pink_balloon0.png");
    rloonimage = loadImage("red_balloon0.png");
arrowImage = loadImage("arrow0.png");
  
 }
function setup() {
  createCanvas(600, 600);
 

  background = createSprite(0,200,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
 
 
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage);
  bow.scale = 1.4;
  

  
  }
  



function draw() {
 
    background.velocityX = -3
     if (background.x < 0){
      background.x = background.width/2;
     }
for(var i=50;i<550;i=i+90){
  bloon = createSprite (50,i,50,50);
  bloon.addImage(bloonimage);
  bloon.scale = 0.1; 
}
  for(var b=100;b<520;b=b+90){
  gloon = createSprite (120,b,50,50);
  gloon.addImage(gloonimage);
  gloon.scale = 0.09; 
}
   for(var c=150;c<490;c=c+90){
  rloon = createSprite (190,c,50,50);
  rloon.addImage(rloonimage);
  rloon.scale = 0.09; 
}
  
   for(var d=200;d<470;d=d+90){
  ploon = createSprite (260,d,50,50);
  ploon.addImage(ploonimage);
   ploon.scale = 1.2;
   
}
  
  
  
  
  
  

  if (keyDown("space")){
  createArrow();
  }

  bow.y = World.mouseY
  drawSprites();
}
function createArrow(){
  arrow = createSprite (480,mouseY,50,10);
  arrow.addImage(arrowImage);
  arrow.scale = 0.4;
  arrow.velocityX = -50;
  arrow.lifetime = 10;
  
}
  
  


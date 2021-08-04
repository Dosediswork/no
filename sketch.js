var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
drawSprites();
var select_sprites = Math.round(random(1,2));
if (frameCount % 80 == 0){
  if(select_sprites==1){
    createApples();
  }
  else{
    createLeaves();
  }
}

function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.velocityY=3;
  apple.scale=0.1;
}
function createLeaves(){
leaf=createSprite(random(50,350),40,10,10); 
leaf.addImage(leafImg);
leaf.velocityY=3;
leaf.scale=0.1;
}
  edges= createEdgeSprites();
  rabbit.collide(edges);
if (keyDown("right")){
  rabbit.velocityX=3;
}else if (keyDown("left")){
  rabbit.velocityX=-3;
}else{
  rabbit.velocityX=0;
}
}
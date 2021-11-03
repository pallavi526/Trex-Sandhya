
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,170,10,10);
  trex.addAnimation("running",trex_running);
  trex.scale=0.6;
 
}

function draw(){
  background("white")
  edges=createEdgeSprites()
  if(keyDown("space")){
    trex.velocityY=-12
  }
  trex.velocityY=trex.velocityY+0.5;

  trex.collide(edges[3])
  drawSprites();
}

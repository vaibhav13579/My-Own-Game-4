var bullet;
var man;
var gameState = "start"
var bulletgroup
function preload(){
bg=loadImage("bgi.jpg");
manImage=loadImage("man.jpg")
bulletimg=loadImage("bullet.jpg")
}


function setup(){
createCanvas(1200,400);

man = createSprite(600,350,70,80)
man.addImage(manImage)
man.scale=0.1
bulletgroup = new Group()

}


function draw(){
 background(bg)

 if(keyDown("Space")){
  gameState = "play"
 }
 if(gameState==="play"){
   spawnbullet()
   if(keyDown("Left_Arrow")){
    man.x=man.x-2
  }
  if(keyDown("Right_Arrow")){
    man.x=man.x+2
  }
   if(man.isTouching(bulletgroup)){
  gameState="end"
   }
   drawSprites();
 }


if(gameState==="end"){
background(0);
fill("red")
textSize(70)
text("Game Over",400,200)
}


 
}
function spawnbullet(){
 if(frameCount%10===0) {
   var rand=random(0,1200)
   bullet = createSprite(rand,0,20,20)
   bullet.addImage(bulletimg)
   bullet.scale=0.1
    bullet.velocityY=5;
    bulletgroup.add(bullet)
 }
}






















const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg;
var shark,sharkImg;
var barrel,barrel2,barrelImg;
var ship,shipImg;
var pirate1 ,pirateImg1;
var pirate2,pirateImg2;
var pirate3,pirateImg3;
var pc1,pc1Img;
var pc2,pc2Img;
var replay,replayImg;
var boat1,boat1Img;
var boat2,boat2Img;
var edges,slingShot;
var gameState = "onSling";
var count=3;
var hit=0;
var touch=0;
var power1,power2,power3,power4;
var power1Img,power2Img,power3Img,power4Img;

function preload(){
bgImg = loadImage("images/ocean.jpg");

replayImg = loadImage("images/replay1.png");

power1Img = loadImage("images/power1.png");

power2Img = loadImage("images/power3.png");

power3Img = loadImage("images/power6.png");

hitSound = loadSound("sounds/hit.mp3");
bgSound = loadSound("sounds/bg.wav");
laughing = loadSound("sounds/laughing.wav")
}

function setup() {
  //createEdgeSprite(edges)
  createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(600,height,1500,60);

  //for creating sharks
  shark = new Shark(50, 540, 180, 120);
  
  //to create pirate ship
  ship = new Ship(1000,360,260,100)
  boat2 = new Boat(300,450,150,50)

  //for pirates
  pirate1 = new Pirate(1000,350,90,90);

  //pc 
  tyler = new PC(295,445,90,90);
  ball = new Ball(400,450,20,20);
  ball2 = new Ball(970,340,20,20);

  ///to create slingshot
  slingShot = new SlingShot(ball.body,{x:400,y:450});
  //slingshot2 = new SlingShot(ball2.body,{x:980,y:340})

  //to create barrel
  //barrel2 = new Barrel(770,435,150,150)
  //barrel = new Barrel(300,450,150,150)
  // boat1 = new Boat(150,450,100,80)
   //pirate2 = new Pirate(870,315,50,50);
  //pirate3 = new Pirate(890,260,50,50);
}

function draw() {
  background(bgImg);
  Engine.update(engine);

  ground.display();

  ship.display();

  pirate1.display();

  boat2.display();

  tyler.display();

  ball.display();

  ball2.display()

  slingShot.display();
 // slingshot2.display()

  shark.display()

  if(ball.body.position.x>700 ){
    Matter.Body.setVelocity(ball2.body,{x:-10,y:20})
  }


  text("hit:"+hit , 20,50)

  text("touch:"+touch , 820,50)

  //var collision = Matter.gameState.collides(ball.body,pirate1.body)
  //if(collision.collided){
  //  hit=hit+1
  //  console.log(hit)
  //}

 // if(Matter.Detector.canCollide(ball.body,pirate1.body)===true){
 // hit=hit+1
 // console.log(hit)
 // }

  //if(ball2.isTouching(tyler)){
  //  touch=touch+1
  //}
  
  if(hit===3){
    gamestate="end";
    fill(0);
    strokeWeight(3)
    text("YOU WIN",400,400);
  }

  if(touch===3){
    gamestate="end";
    fill(0);
    strokeWeight(3)
    text("YOU LOSE",400,400);
  }

  if(count===0){
  gameState="end"
  }

 // detectollision(ball,pirate1)

  //barrel.display()
 //barrel2.display()
  //pirate2.display();
  //pirate3.display();
// boat1.display();

}

function mouseDragged(){
  if(gameState!=="launched"){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

  }
}


function mouseReleased(){
  slingShot.fly();
  //gameState="launched"
  count=count-1
  //slingshot2.fly()
 console.log(ball.body.position)
}

function keyPressed(){
  if(keyCode===32){
    // if(ball.body.position.x<500){
      ball.trajectory=[]
      Matter.Body.setPosition(ball.body,{x:400,y:450})
      slingShot.attach(ball.body)
      Matter.Body.setPosition(tyler.body,{x:295,y:445})
      Matter.Body.setPosition(pirate1.body,{x:1000,y:340})
      Matter.Body.setPosition(boat2.body,{x:300,y:450})
      Matter.Body.setPosition(ship.body,{x:1000,y:360})
      Matter.Body.setPosition(ball2.body,{x:960,y:340})
     }
    
  //}
}

//function detectollision(lball,lpirate){
  
 // ballBodyPosition=lball.body.position
 // pirate1BodyPosition=lpirate.body.position
  
  //var distance=dist(ballBodyPosition.x, ballBodyPosition.y, pirate1BodyPosition.x, pirate1BodyPosition.y)
  //	if(distance<=lpirate.r+lball.r)
  //  {console.log("hello")
  //	  hit = hit+1
  //  }

 // }

var helicopterIMG, helicopterSprite, packageSprite,packageIMG,recSprite,boxSprite,rec3Sprite;
var packageBody,ground,rec,box,rec3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	boxSprite=createSprite(550,570,50,200);
boxSprite.shapeColor=color(255)
recSprite=createSprite(400,635,300,50)
recSprite.shapeColor=color(255)
rec3Sprite=createSprite(250,570,50,200)
rec3Sprite.shapeColor=color(255)
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

box=Bodies.rectangle(550,570,50,200,{isStatic:true});
rec=Bodies.rectangle(400,635,200,50)
rec3=Bodies.rectangle(250,570,200,50)
World.add(world,box)
World.add(world,rec)
World.add(world,rec3)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}




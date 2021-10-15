
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = Bodies.circle(200, 200, 25, ballOpts);
  World.add(world, ball);
  
  ground = new Ground(200, 380, 400, 20);  

	Engine.run(engine);

	var ballOpts = {
	  restitution: 0.3,
	  density: 1.2
	}
  
}


function draw() {
  rectMode(CENTER);
  ground.show();
  background(0);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 25);

  drawSprites();
  
}




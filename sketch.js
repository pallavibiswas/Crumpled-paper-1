var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(500,580,1000,20);
	box1 = new Box(690,520,20,100);
  box2 = new Box(910,520,20,100);
	box3 = new Box(800,560,200,20);
  paper = new Paper();

}
  function keyPressed()  {

  if (keyCode === UP_ARROW)
    { Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})};


  }
 


function draw() {
  Engine.run(engine);
  background(0);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(200,200,20);
	ground= new Ground(800,height,1600,20);
	bin1 = new Dustbin (1000,680,350,30);
	bin2 = new Dustbin (820,600,30,190);
	bin3 = new Dustbin (1170,600,30,190);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW)
{
	Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75});
}}



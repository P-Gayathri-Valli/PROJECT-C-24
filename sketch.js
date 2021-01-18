
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper_ball;
var wall_1,wall_2,wall_3;

function preload()
{
	
}

function setup() {
	createCanvas(1366, 300);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(690,280,1400,20);
    paper_ball = new Paper_Ball();
    wall_1= new Dustbin(985,195,30,150);
    wall_2= new Dustbin(1100,255,200,30);
    wall_3= new Dustbin(1215,195,30,150);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper_ball.display();
  wall_1.display();
  wall_2.display();
  wall_3.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:165,y:-100});}
}
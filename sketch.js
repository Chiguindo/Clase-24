
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var btn2

var angle=60;

function setup() {
  createCanvas(400,400);

 engine = Engine.create();
  world = engine.world;
 

   btn2 = createImg("up.png");
   btn2.position(220,30);
   btn2.size(50,50);
   btn2.mouseClicked(vForce);

   
 
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   top_wall= Bodies.rectangle(200,10,400,20,ground_options);
   World.add(world,top_wall); 

   left = Bodies.rectangle(10,200,20,400,ground_options); 
   World.add(world,left); 

   rigth= Bodies.rectangle(390,200,20,400,ground_options); 
   World.add(world,rigth);

   ground = Bodies.rectangle(100,400,400,20,ground_options);
   World.add(world,ground);

   ball = Bodies.circle(100,10,20,ball_options);
   World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
 
  Matter.Body.rotate(ground,angle);
  push();
  translate(ground.position.x,ground.position.y);
  rotate (angle);
  rect(0,0,100,20);
  pop();
  angle+=0.1;

  

  ellipse(ball.position.x,ball.position.y,20);

  rect(ground.position.x,ground.position.y,500,20);

  rect(top_wall.position.x,top_wall.position.y,400,20);

   rect(left.position.x,left.position.y,20,400); 

   rect(rigth.position.x,rigth.position.y,20,400);

console.log(ground.position.y);

  
  
}
  
function vForce(){

  Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:-0.05});

}

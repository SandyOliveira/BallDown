var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];

var ball;



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  
    
}
 
function draw() {
  background("black");
 
 
  Engine.update(engine);
  ground.display();
  


  
 
    if(ball!=null){
       ball.display();
  
  
    }

  
   
}


function mousePressed(){ 
  ball=new Ball(mouseX, 10, 10, 10);  
  
 }


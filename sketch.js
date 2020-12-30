const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles=[];
var plinkos=[];
var divisions = [];

var Particle;

var divisionHeight = 200;
function setup() {
  createCanvas(480,650);
  
  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(width/2, 640, width, 10);

  for(d = 0; d<=480; d=d+80){
    divisions.push(new division(d, 540, 10, divisionHeight))
  }

  for(p = 35; p<=445; p=p+50){
    plinkos.push(new plinko(p, 60, 13));
  }

  for(s = 15; s<=width; s=s+50){
    plinkos.push(new plinko(s, 120, 13));
  }

  for(b = 35; b<=445; b=b+50){
    plinkos.push(new plinko(b, 180, 13));
  }

  for(c = 15; c<=width; c=c+50){
    plinkos.push(new plinko(c, 240, 13));
  }

  for(d = 35; d<=445; d=d+50){
    plinkos.push(new plinko(d, 300, 13));
  }

  for(e = 15; e<=width; e=e+50){
    plinkos.push(new plinko(e, 360, 13));
  }
  
  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground1.display();

  if(frameCount%60 === 0){
  particles.push(new particle(random(230, 250), 0, 10));
  }
  
  for(d = 0; d < divisions.length; d++){
    divisions[d].display();
  }

  for(p = 0; p < plinkos.length; p++){
    plinkos[p].display();
  }

  for(s = 0; s < particles.length; s++){
    particles[s].display();
  }


}
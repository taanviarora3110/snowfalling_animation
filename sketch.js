var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//creating empty arrays
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=100; k = k + 100) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var a = 0; a <=200; a = a + 100) {
    divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var b = 0; b <=300; b = b+ 100) {
    divisions.push(new Divisions(b, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var c = 0; c <=400; c = c + 100) {
    divisions.push(new Divisions(c, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var d = 0; d <=500; d = d+ 100) {
    divisions.push(new Divisions(d, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var e = 0; e <=600; e = e + 100) {
    divisions.push(new Divisions(e, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var f = 0; f <=700; e = e + 100) {
    divisions.push(new Divisions(f, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,100));
  }

  //create 2nd row of plinko objects
  for (var k = 50; k <=width-10; k=k+50) 
  {
    plinkos.push(new Plinko(k,200));
  }

  //create 3rd row of plinko objects
  for (var l= 40; l<=width; l=l+50) 
  {
    plinkos.push(new Plinko(l,300));
  }

  
  //create 4th row of plinko objects
  for (var m = 15; m <=width-10; m=m+50) 
  {
    plinkos.push(new Plinko(m,400));
  }


  //create particle objects
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10),10,10));
  }
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display();   
  }
  for (var l = 0; l < plinkos.length; l++) {
    plinkos[l].display();   
  }
  for (var m = 0; m< plinkos.length; m++) {
    plinkos[m].display();   
  }
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for (var a = 0; a < divisions.length; a++) {
    divisions[a].display();
  }
  for (var b = 0; b< divisions.length; b++) {
    divisions[b].display();
  }
  for (var c = 0; c < divisions.length; c++) {
    divisions[c].display();
  }
  for (var d = 0; d < divisions.length; d++) {
    divisions[d].display();
  }
  for (var e = 0; e < divisions.length; e++) {
    divisions[e].display();
  }
  for (var f = 0; f < divisions.length; f++) {
    divisions[f].display();
  }

  //display the paricles 
  for (var k = 0; k < particles.length; k++) {
    particles[k].display();
  }
}
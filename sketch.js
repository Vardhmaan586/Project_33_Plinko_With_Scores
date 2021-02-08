var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var count = 0;

var score = 0;
var particle;


var gameState = "play";

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,375));
    }

    
    
 
}

function mousePressed(){
  if(gameState == "play"){
    particle = new Particle(mouseX,10,10);
    count++;
  }
}

function draw() {
  background("black");
  textSize(40);

  
 text("Score : "+score,25,40);

 textSize(30);

 /*if(particle != null){
   particle.display();
 
   if(particle.body.position.y>760){
     if(particle.body.position.x<300){
       score = score +500;
       particle = null;
     }
   }
  }*/

  
  if(particle!=null){
     particle.display();
      
      if (particle.body.position.y>600) {
            if (particle.body.position.x < 300) {
                score=score+500;      
                particle=null;
                

                if ( count>= 5) gameState ="end";                          
            }


            else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) {
                  score = score + 100;
                  particle=null;
                  

                  if ( count>= 5) gameState ="end";

            }
            else if (particle.body.position.x < 900 && particle.body.position.x > 601 ){
                  score = score + 200;
                  particle=null;
                  

                  if ( count>= 5)  gameState ="end";

            }      
            
      }

    }

    if(gameState==="end"){
      push();
      fill("white");
      textSize(90);
      text("Game Over!",150,260);
      pop();
    }
 

 text("500",16,700);
 text("500",96,700);
 text("500",176,700);
 text("500",256,700);
 text("100",336,700);
text("100",416,700);
text("100",495,700);
text("200",576,700);
text("200",656,700);
text("200",736,700);



  Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();


    
     
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
}
}

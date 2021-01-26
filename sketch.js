const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var backgroundImg;
var soldier1;


function preload(){
backgroundImg=loadImage("background.webp");

}


function setup() {
createCanvas(displayWidth-30,displayHeight-170);
  engine=Engine.create();
  world=engine.world;
  soldier1=new soldier(900,1000,30,30);
  //soldier1.scale=0.3;
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  soldier1.display();
  //drawSprites();
}
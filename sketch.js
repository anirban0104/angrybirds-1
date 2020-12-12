const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,370,60,60);
    box2 = new Box(400,370,60,60);
    ground = new Ground(400,height,800,20)
    badpig1 = new badpig(300,380)
    log1 = new log(300,330,10,270,PI/2)
    box3 = new Box(200,300,60,60);
badpig2 = new badpig(300,310)
box4 = new Box(400,300,60,60)
log2 = new log(300,280,10,270,PI/2)
box5 = new Box(300,220,50,50)
log3 = new log(250,250,10,80,PI/7)
log4 = new log(350,250,10,80,-PI/7)

    angry1 = new angrybird(300,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    badpig1.display();
    box3.display();
    badpig2.display();
log1.display();
box4.display();
log2.display();
angry1.display();
box5.display();
log3.display();
log4.display();
}
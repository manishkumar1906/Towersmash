const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1
var block1,block3;
var platform;
var circle;
var slingshot;
var log1,log2,log3
var gameState = "onSling";
var score = 0;

function preload() {
  //  backgroundImg = loadImage("sprites/Backg1.png")
   // bird2Image = loadImage ("sprites/bird2.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    block1 = new Block (810, 350);
    log1 = new Log (810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    block3 = new Block(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    circle = new Circle(200,50);
  //  bird2.image = 

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(circle.body,{x:200, y:50});
}

function draw(){
        background ("red")
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    block1.display();
    block1.score();
    log1.display();

    
    block3.display();
    block3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    circle.display();
    platform.display();
    slingshot.display();
    //log6.display();   
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(circle.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(circle.body);
       circle.trajectory = []
    }
}

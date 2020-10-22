const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score = 0;
var gameState = "onSling";

function preload() {
   backgroundImg = loadImage("sprites/bg.png")
    loadBG();

    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(250,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:250, y:100});
    
}

function draw(){
 
    background(backgroundImg);
    
    //display score
    pig1.score();
    pig3.score();
    fill("white")
    noStroke();
    textSize(20);
    text("SCORE : "+ score,980,30);

    push();
    noStroke();
    text(mouseX +","+mouseY,mouseX,mouseY);
    pop();
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

   //bird.display(); 
    platform.display();
    //log6.display();
    slingshot.display();    

}

function mouseDragged(){
    if(gameState === "onSling"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    if(gameState === "onSling"){
    slingshot.fly();
    gameState = "launched"
    }
}

function keyPressed(){
    if(keyCode === 32){
        gameState = "onSling"
        slingshot.attach(bird.body);
    }
}

async function loadBG(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJ = await response.json();
    console.log(response);
    console.log(responseJ)
    var datetime = responseJ.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour)

    if(hour>=18 ||hour<=6){
        bg= "sprites/bg2.jpg";
    }
    else{
        bg ="sprites/bg.png";
    }
    console.log(bg)
    backgroundImg = loadImage(bg);
}

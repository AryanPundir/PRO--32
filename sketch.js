
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground1 , ground2
var box1 , box2,box3 , box4,box5,box6 , box7,box8 , box9,box10,box11,box12 , box13 , box14 , box15,box16,box17 , box18 , box19 , box20,
box21 , box22 , box23 , box24 , box25

var polygon1
var rope1
var score = 0
var backgroundImg

function preload()
{
	
}

function setup() {
	createCanvas(950, 600);


	engine = Engine.create();
	world = engine.world;

	getbackgroundColour()

	//Create the Bodies Here.
	ground1= new Ground(400,450,300,10)
	ground2 = new Ground(600,250,250,10)

	//bottom
	box1 = new Box(510,225,40,40)
	box2 = new Box(550,225,40,40)
	box3 = new Box(590,225,40,40)
	box4 = new Box(630,225,40,40)
	box5 = new Box(670,225,40,40)
	box6 = new Box(280,425,40,40)
	box7 = new Box(320,425,40,40)
	box8 = new Box(360,425,40,40)
	box9 = new Box(400,425,40,40)
	box10= new Box(440,425,40,40)
	box11= new Box(480,425,40,40)
	box12= new Box(520,425,40,40)
	

	box13= new Box2(550,185,40,40)
	box14= new Box2(590,185,40,40)
	box15= new Box2(630,185,40,40)
	box16 = new Box2(320,385,40,40)
	box17 = new Box2(360,385,40,40)
	box18 = new Box2(400,385,40,40)
	box19 = new Box2(440,385,40,40)
	box20 = new Box2(480,385,40,40)

	box21= new Box3(590,145,40,40)
	box22= new Box3(360,345,40,40)
	box23= new Box3(400,345,40,40)
	box24 = new Box3(440,345,40,40)

	box25 = new Box4(400,305,40,40)

	polygon1 = new Polygon(100,350,50,50)
	
	rope1 = new Rope(polygon1.body , {x:100,y:330})

	Engine.run(engine);
  
}


function draw() {
	if(backgroundImg)
  background(backgroundImg);


  textSize(30)
    fill(59,122,87)
	text("Score="+score,750,40)  
	
	rectMode(CENTER);
  
ground1.display();
ground2.display();


box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();


box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score2();
box14.score2();
box15.score2();
box16.score2();
box17.score2();
box18.score2();
box19.score2();
box20.score2();
box21.score3();
box22.score3();
box23.score3();
box24.score3();
box25.score4();

//console.log(score)

polygon1.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope1.fly();
}

function keyPressed(){
	if (keyCode === 32){
		rope1.attach(polygon1.body);
	}
}

async function getbackgroundColour(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responsejson = await response.json();
console.log(responsejson);
var dateTime = responsejson.datetime
var hr = dateTime.slice(11,13);
console.log(hr)
if(hr>=06&& hr<18 ){
console.log("dayColour")
bg = rgb(255,0,102)
}
else{
    bg = "black"
    console.log("nightColour")
}
backgroundImg = bg
console.log(backgroundImg);
}


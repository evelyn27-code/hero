
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var box;
var sky1;

function preload()
{
sky1 = loadImage("sky.png");	
}

function setup() {
	createCanvas(3000,800);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(500,600,1000,20);
	ground2 = new ground(200,0,3,1);
	box1 = new Box(900,100,70,70);
	box2 = new Box(900,100,70,70);
	box3 = new Box(900,100,70,70);
	box4 = new Box(900,100,70,70);
	box5 = new Box(900,100,70,70);
	box6 = new Box(900,100,70,70);
	
	box7 = new Box2(800,100,70,70);
	box8 = new Box2(800,100,70,70);
	box9 = new Box2(800,100,70,70);
	box10 = new Box2(800,100,70,70);
	box11 = new Box2(800,100,70,70);
	box12 = new Box2(800,100,70,70);

	box13 = new Box3(700,100,70,70);
	box14 = new Box3(700,100,70,70);
	box15 = new Box3(700,100,70,70);
	box16 = new Box3(700,100,70,70);
	box17 = new Box3(700,100,70,70);
	box18 = new Box3(700,100,70,70);
    box19 = new Box3(700,100,70,70);
	box20 = new Box3(700,100,70,70);


	box21 = new Box2(600,100,70,70);
	box22 = new Box2(600,100,70,70);
	box23 = new Box2(600,100,70,70);
	box24 = new Box2(600,100,70,70);
	box25 = new Box2(600,100,70,70);
	box26 = new Box2(600,100,70,70);

	box27 = new Box(500,100,70,70);
	box28 = new Box(500,100,70,70);
	box29 = new Box(500,100,70,70);
	box30 = new Box(500,100,70,70);
	box31 = new Box(500,100,70,70);
	box32 = new Box(500,100,70,70);

	hero1 = new Hero(200,200,100);

	monster1 = new Monster(1100,300,50,50);
	monster2 = new Monster(1100,-150,50,50);
	monster3 = new Monster(1000,-300,50,50);
	
	var options1 = {
	bodyA: ground2.body,
	bodyB:hero1.body,
	stiffness: 0.2,
	length: 450


	}

	//var chain = Constraint.create(options1);
//World.add(world,chain);
}


function draw() {
  
  background(sky1);
  Engine.update(engine)

 // ground1.display();
 
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
	box26.display();

	box27.display();
	box28.display();
	box29.display();
	box30.display();
	box31.display();
	box32.display();
	
	ground1.display();

	ground2.display();

	hero1.display();

	monster1.display();
	monster2.display();
	monster3.display();


	strokeWeight(0);
	stroke("white");
	line(ground2.body.position.x,ground2.body.position.y,hero1.body.position.x,hero1.body.position.y)
 
}



function mouseDragged(){

        Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY});
    
}
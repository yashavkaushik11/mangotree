
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyimg, mangoimg, stoneimg, treeimg;

function preload()
{
	boyimg = loadImage("Plucking mangoes/boy.png");
	stoneimg = loadImage("Plucking mangoes/stone.png");
	treeimg = loadImage("Plucking mangoes/tree.png");
	mangoimg = loadImage("Plucking mangoes/mango.png");
}

function setup() {
	createCanvas(1300, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = createSprite(500, 490, 1600, 20);
	tree = createSprite(1050, 250);
	tree.addImage(treeimg);
	tree.scale = 0.38;
	boy = createSprite(300, 400);
	boy.addImage(boyimg);
	boy.scale = 0.12;

	stone = new Stone(100,100);
	slingshot = new SlingShot(stone.body,{x:240,y:100})


	Engine.run(engine);
  
}


function draw() {
  background(245);
  ground.display();
  tree.display();
  boy.display();
  slingshot.display();
  stone.display();
  
  drawSprites();
 
}




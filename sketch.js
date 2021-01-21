var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	 fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	var starBodyOption={

		restitution:1.0,
		isStatic:true
		
	}

	starBody = Bodies.circle(650 , 30 , 5 ,starBodyOption)
	World.add(world, starBody);
	
	Engine.run(engine);

	
    if(keyDown("down")){

		star.velocityX = -5;
 
 
	 }

}


function draw() {
  background(bgImg);

  Engine.update(engine);
  star.x = starBody.position.x
  star.y = starBody.position.y

  if(starBody.position.y > 470){
        
	Matter.Body.setStatic(starBody,true)
    fairyVoice.stop();

  }

  
  
  ellipseMode(RADIUS);
  

  

  keyPressed();

  drawSprites();

}

function keyPressed() {
	
	if(keyDown("right")){

       fairy.x = fairy.x + 3;

	}

	if(keyDown("left")){

       
       fairy.x = fairy.x - 3;


	}


    if(keyDown("down")){
		 
		console.log("line_103");
        Matter.Body.setStatic(starBody,false)


	}
}

    

    

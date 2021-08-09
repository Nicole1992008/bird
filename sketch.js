var PLAY = 1;
var END = 0;
var gameState = PLAY;



var bird , birdImg;
var bg , bgImg;
var poles , polesImg;




function preload(){

    birdImg.loadImage = ("bird.png");
    bgImg.loadImage = ("background.jpg");
    polesImg.loadImage = ("pole.png");


}

function setup() {

    createCanva(600,600);

    bird = createSprite(50,180,20,50);
    bird.addImage(birdImg);
    bird.scale = 0.5;

    bg = createSprite(600,600);
    bg.addImage(bgImg);

    polesGroup = new polesGroup();

    bird.setCollider("circle",0,0,40);
    bird.debug = true


 
}

function draw() {

    background(0);

    if(gameState === PLAY){

        bg.velocityX = -5;

        if (bg.x < 0){
            bg.x = bg.width/2;
    }

    if(keyDown("space")&& bird.y >=100){
        bird.velocityY = -13;

    }

    if(keyDown("right")){
        bird.x = bird.x + 4;
    }

    


    bird.velocityY = bird.velocityY + 0.8

    spawnPoles();

    if(polesGroup.isTouching(bird)){
        gameState = END;
    }
}

else if(gameState === END){

    bg.velocityX =  0;

    polesGroup.setVelocityXEach(0);
    polesGroup.setLifeTimeEach(-1);
}

drawSprites();
}

function spawnPoles(){

    if (frameCount % 75 === 0){
        var poles = createSprite(400,165,10,40);
        poles.velocityX = -6;

        var rand = Math.round(random(150,300));

        poles.addImage(polesImg);

        poles.scale = 0.5;
    poles.lifetime = 300;

    polesGroup.add(poles);
    }
}
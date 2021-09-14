var boy, boyImage
var coin, coinImage, coinGroup
var snake, snakeImage, snakeGroup
var dungeon,dungeonImage 
var torch, torchImage;
var invisibleground 
var gameOver, gameOver_Image


function preload(){
    boyImage = loadAnimation("boyrunning1.png", "boyrunning2.png","boyrunning3.png",)
    coinImage = loadAnimation ("coin1.png", "coin2.png", "coin3.png", "coin4.png", "coin5.png", "coin6.png")
    dungeonImage = loadImage ("dungeon.png")
    torchImage = loadAnimation("torch1.png", "torch2.png")
    snakeImage = loadAnimation("snake1.png", "snake2.png")
    gameOver_Image = loadImage("gameover.png")
}

function setup() {
 createCanvas(1000,600);
 edges = createEdgeSprites ()
 dungeon = createSprite(0,300)
 dungeon.addImage("dungeonimg", dungeonImage)
 dungeon.scale = 3
 //dungeon.velocityX= 1
 boy = createSprite (260,460,25,25)
 boy.addAnimation("boyImage", boyImage)
 boy.scale = 0.2

 torchGroup = new Group()
 snakeGroup = new Group()
 coinGroup = new Group()


 snake = createSprite (700,525,25,25)
 snake.addAnimation("snake1",snakeImage )
 snake.scale = 0.09
 snake.velocityX = -5 
}
 var gameState = "play"
 gameState === "play"
function draw() {
    background("225")
if (gameState === "play"){
        if (keyDown("space")){
            boy.veloctiyY = -10
          
        }
            boy.veloctiyY = boy.velocityY + 0.8 
       dungeon.velocityX = -9 
    if (dungeon.x <100){
        dungeon.x = dungeon.width/1
    }

    if(boy.isTouching(snakeGroup)){
        boy.velocityX = 0 
        boy.velocityX = 0 
        gameState = "end"
        boy.destroy()
    } 
    
}
    
    drawSprites();
    if (gameState === "end"){
        gameover = createSprite ("300,300,50,50")
        gameOver.addImgage ("gameover", gameOver_Image)
    }
}

function spawnCoins() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
       coin = createSprite(600,100,40,10);
       coin.velocityX = -5 
      coin.y = Math.round(random(10,60));
      coin.addImage(coinImage);
      coin.scale = 0.5;
      coin.velocityX = -3;
      
       //assign lifetime to the variable
      coin.lifetime = 134;
      
      //adjust the depth
      coin.depth = trex.depth;
      snake.depth = trex.depth + 1;

     coinGroup.add(coin);
    }
}
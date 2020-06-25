var player1img, player1img2, player1, lazyTNT1, lazyTNT2, lazyTNT3, tntimg, state=1, boom, boomimg;
var base, d1, d2, d3, d4, d5;

function preload(){
  player1img=loadImage("player1a.png");
  boomimg=loadImage("boom!.png");

  tntimg=loadImage("bomb.png");
}

function setup() {
  createCanvas(800,380);

  player1 = createSprite(50,200,10,10);
  player1.addImage("p",player1img);

  lazyTNT1=createSprite(200,200,10,10);
  lazyTNT1.addImage("suck my lassitute",tntimg);

  lazyTNT1.scale=1.7; 

  lazyTNT2=createSprite(1800,100,10,10);
  lazyTNT2.addImage("suck my lassitute",tntimg);

  lazyTNT2.scale=1.7; 

  lazyTNT3=createSprite(1000,100,10,10);
  lazyTNT3.addImage("suck my lassitute",tntimg);

  lazyTNT3.scale=1.7; 

  boom=createSprite(player1.x, player1.y, 20, 20);
  boom.addImage("ba-bye!",boomimg);

  boom.visible=false;

  base = createSprite(400, 380, 3000, 20);
  d1 = createSprite(235, 320, 470, 100);
  d2 = createSprite(445, 315, 420, 160);
  d3 = createSprite(1000, 315, 100, 160);
  d4 = createSprite(1300, 290, 510, 200);
  d5 = createSprite(1950, 340, 400, 100);


  base.velocityX=-4;
  d1.velocityX=-4;
  d2.velocityX=-4;
  d3.velocityX=-4;
  d4.velocityX=-4;
  d5.velocityX=-4;

}

function draw() {
  background(200);  

  boom.x=player1.x;
  boom.y=player1.y;

  if(state==1){
    if(keyDown(UP_ARROW)){
      player1.velocityY = -10;
    }
  
    player1.velocityY=player1.velocityY+1;

    lazyTNT1.velocityY=lazyTNT1.velocityY+1;
    lazyTNT2.velocityY=lazyTNT1.velocityY+1;
    lazyTNT3.velocityY=lazyTNT1.velocityY+1;

    
    lazyTNT1.collide(base);
    lazyTNT1.collide(d1); 
    lazyTNT1.collide(d2);
    lazyTNT1.collide(d3);
    lazyTNT1.collide(d4);
    lazyTNT1.collide(d5);

    lazyTNT2.collide(base);
    lazyTNT2.collide(d1); 
    lazyTNT2.collide(d2);
    lazyTNT2.collide(d3);
    lazyTNT2.collide(d4);
    lazyTNT2.collide(d5);

    lazyTNT3.collide(base);
    lazyTNT3.collide(d1); 
    lazyTNT3.collide(d2);
    lazyTNT3.collide(d3);
    lazyTNT3.collide(d4);
    lazyTNT3.collide(d5);
    
  
    if(keyDown(RIGHT_ARROW)){
  
      base.velocityX=-4;
      d1.velocityX=-4;
      d2.velocityX=-4;
      d3.velocityX=-4;
      d4.velocityX=-4;
      d5.velocityX=-4;

      lazyTNT1.velocityX=-4;
      lazyTNT2.velocityX=-4;
      lazyTNT3.velocityX=-4;
    }else{
  
      base.velocityX=0;
      d1.velocityX=0;
      d2.velocityX=0;
      d3.velocityX=0;
      d4.velocityX=0;
      d5.velocityX=0;

      lazyTNT1.velocityX=0;
      lazyTNT2.velocityX=0;
      lazyTNT3.velocityX=0;
    }

    if(player1.collide(lazyTNT1)){
      state=0;
      player1.visible=false;
      lazyTNT1.visible=false;
      boom.visible=true;
    }

    if(player1.collide(lazyTNT2)){
      state=0;
      player1.visible=false;
      lazyTNT2.visible=false;
      boom.visible=true;
    }

    if(player1.collide(lazyTNT3)){
      state=0;
      player1.visible=false;
      lazyTNT3.visible=false;
      boom.visible=true;
    }
  
    player1.collide(base);
    player1.collide(d1); 
    player1.collide(d2);
    player1.collide(d3);
    player1.collide(d4);
    player1.collide(d5);
  }

  if(state==0){
    player1.velocityX=0;
    player1.velocityY=0;

    base.velocityX=0;
    d1.velocityX=0;
    d2.velocityX=0;
    d3.velocityX=0;
    d4.velocityX=0;
    d5.velocityX=0;

    lazyTNT1.velocityX=0;
    lazyTNT2.velocityX=0;
    lazyTNT3.velocityX=0;
  }

  

  drawSprites();
}
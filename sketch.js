var player;
var player2;
var one;
var two;
var three;
var four;
function setup() {
  createCanvas(600,600);
  player = createSprite(400, 300, 50, 50);
  player2 = createSprite(200, 300, 50, 50);
  one = createSprite(-5,-25, 1500,50);
  two = createSprite(-5, 5, 5, 1500);
  three = createSprite(-5,605,1500,5);
  four = createSprite(605,5,5,1500);

  one.immovable=true;
  two.immovable=true;
  three.immovable=true;
  four.immovable=true;
}

function draw() {
  background(0);
    drawSprites();
    player.bounce(player2);
    player2.bounce(player);

    player.bounce(one);
    player2.bounce(one);

    player.bounce(two);
    player2.bounce(two);

    player.bounce(three);
    player2.bounce(three);

    player.bounce(four);
    player2.bounce(four);

    if(keyDown(37)){// left
      player.setSpeed(5,180);
}
    if(keyDown(65)){//A key
      player2.setSpeed(5,180);
}
    if(keyDown(39)){ //Right
      player.setSpeed(5, 360);
}
    if(keyDown(68)){ //D key
      player2.setSpeed(5,360);
}
    if(keyDown(38)){ //UP
      player.setSpeed(5,270);
}
    if(keyDown(87)){ //W key
      player2.setSpeed(5,270);
}
    if(keyDown(40)){ //Down
      player.setSpeed(5,90);
}
    if(keyDown(83)){ //S key
      player2.setSpeed(5,90);
}
}

var sprite1 = createSprite(350, 250);
var sprite2 = createSprite(200, 250);
var sprite3 = createSprite(0, 350);
var sprite4 = createSprite(500, 350);




var sprite = createSprite(200, 200);
sprite.setAnimation("rainbow_1");
var sprite1= createSprite(225, 190);
sprite1.setAnimation("dirt_1");
//Draw the background and grass

var size = 200;
function draw() {
var State = 0;
var height =  200;
var width = 100;
var leavesWidth = width *2;
stroke("black");

//Draw the trunk
noStroke();
fill("tan");
rect(100-(width/2),350-height,width,height);

//Draw the leaves
fill("darkGreen");
ellipse(100,350-height,leavesWidth,leavesWidth);
fill("black");
textSize(20);
text("Start",200,200);
fill("yellow");

fill("black");
text("Start",200,200);
if(mousePressedOver(sprite1)){
State= State + 1;

}
if (State==1) {
  size = size + 1;
  height = randomNumber(100, 200);
  width = randomNumber(10,100); 
  leavesWidth = width *2;
  noStroke();
  fill("tan");
  rect(100-(width/2),350-height,width,height);

//Draw the leaves
  fill("darkGreen");
  ellipse(100,350-height,leavesWidth,leavesWidth);
  sprite4.x= sprite4.x - 2;

  sprite3.x= sprite3.x + 2;

  sprite2.rotation = random(-20, 20);
  sprite1.setAnimation("blue_shirt_1");
  sprite2.setAnimation("blue_hoodie_hands_in_hoodie_1");
  drawSprites();
  
}
}

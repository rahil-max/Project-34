//Create variables here
var database;
var dog,dogimg,doghappy;
var dataref;
var food;

function preload()
{
  //load images here
  dogimg = loadImage("Dog.png");
  doghappy = loadImage("happydog.png");
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();

  dataref = database.ref("food");
  dataref.on("value",function(data){ food = data.val()});
  
  dog = createSprite(400,350,50,50);
  dog.addImage(dogimg);

  
  
  
}


function draw() {  
  background(46,139,87);

  if(keyIsDown(UP_ARROW)&&food!==0){
    writeStocks(food);
    dog.addImage(doghappy);
    textSize(20);
    fill("black");
    stroke(70);
    text("hmm Yummy!",50,200);
  }

  else{
    textSize(20);
    fill("black");
    stroke(70);
    text("I am Hungry",50,200);
  }
  
  textSize(30);
  fill("red");
  text("food: "+food,660,100);

  drawSprites();
  //add styles here
  textSize(30);
  fill("yellow");
  stroke(40);
  text("press up arrow key to feed the dog",200,650)

}

function writeStocks(foods){

  if(foods<=0){
    food=0
  }

  else{
    foods-=1;
  }

  database.ref("/").update({
    food: foods
  })
}



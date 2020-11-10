var dog;
var database;
var food;
var dbPosition;
var form;
var lastFed;
var pos;


function setup(){
    createCanvas(500,500);
    dog = createSprite(250,250,10,10);
    dog.shapeColor = "brown";
    database = firebase.database(); 
    dbPosition = database.ref('food');
    dbPosition.on("value", readFood)
    pos = database.ref('time')
    pos.on("value", readTime);
   
    
}

function draw(){
    background(46,139,87);
   
    
    if(keyDown(DOWN_ARROW)){
        feed();
    }

    if(keyDown(UP_ARROW)){
        stock();
    }
   
    drawSprites();
    textSize(15)
    textAlign(CENTER)
    fill("black")
    text("You have " + food + " pieces of food to feed the dog", 200,200)
    form = new Form();
    form.display();
    textSize(15)
    textAlign(CENTER)
    text("Last feed time was " + lastFed, 250,150);
}

function readTime(data){
     lastFed = data.val();
}

function readFood(data){
food = data.val();

}


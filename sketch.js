var canvas;
var music;
var a,b,c,d;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    a = createSprite(400,600, 50, 50);
    a.shapeColor = "cyan";
    
    b = createSprite(300, 600, 50, 50);
    b.shapeColor = "lime";

    c = createSprite(200, 600, 50, 50);
    c.shapeColor = "red";

    d = createSprite(500, 600, 50, 50);
    d.shapeColor = "cyan";

    //create box sprite and give velocity
    box = createSprite(random(20,750),25,25);
    box.velocityY= -2;
    box.velocityX = -5;
    box.shapeColor = "white";

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    edges = createEdgeSprites();

    box.bounceOff(edges);
   // box.bounceOff(bottomEdge);
  //  box.bounceOff(leftEdge);
  //  box.bounceOff(rightEdge);


    if(box.isTouching(a)){
        box.shapeColor= a.shapeColor;
    }
    
    if(box.isTouching(b)){
        box.shapeColor= b.shapeColor;
    }
    
    if(box.isTouching(c)){
        box.shapeColor= c.shapeColor;
    }
    
    if(box.isTouching(d)){
        box.shapeColor= d.shapeColor;
    }
 drawSprites();

    //add condition to check if box touching surface and make it box

}

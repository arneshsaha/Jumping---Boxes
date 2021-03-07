var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,580,200,40)
    surface1.shapeColor = "purple"
    surface2 = createSprite(300,580,200,40)
    surface2.shapeColor = "yellow"
    surface3 = createSprite(500,580,200,40)
    surface3.shapeColor = "green"
    surface4 = createSprite(700,580,200,40)
    surface4.shapeColor = "orange"

    //create box sprite and give velocity
    box = createSprite(random(50,750),0,30,30)
    box.shapeColor = "white"
    box.setVelocity(6,4.5);

    edges = createEdgeSprites();
    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box.bounceOff(edges)
    

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1) && box.bounceOff(surface1)){
        box.shapeColor = surface1.shapeColor
    }else if(box.isTouching(surface2)){
        box.shapeColor = surface2.shapeColor
        box.setVelocity(0,0);
        music.stop();
    }else if(box.isTouching(surface3) && box.bounceOff(surface3)){
        box.shapeColor = surface3.shapeColor
    }else if(box.isTouching(surface4) && box.bounceOff(surface4)){
        box.shapeColor = surface4.shapeColor
        music.play();
        
    }

    drawSprites();
}

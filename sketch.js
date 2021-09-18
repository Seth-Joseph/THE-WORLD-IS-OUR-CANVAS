var painting= [];
var currentPath = [];
var database;

function setup() {
  var canvas = createCanvas(1366,768);
  database=firebase.database();
  var databaseRef=database.ref("cursor/currentPath");
  databaseRef.on("value",startPath,endPath);

  canvas.mousePressed(startPath);
  canvas.mouseReleased(endPath);
}

function startPath(){
   currentPath = [];
   painting.push(currentPath);
}

function endPath(){

}

function draw() {
  background("white");

  strokeWeight(0);
  textSize(42);
  fill('black')
  text("Welcome to WhiteBoard",480, 50);
  strokeWeight(0);
  textSize(20);
  fill('gray')
  text("Use your mouse pointer to draw",550, 70);
  
  if(mouseIsPressed){
    var point = {
      x : mouseX,
      y : mouseY
    }
    
    currentPath.push(point);

  } 

  noFill("black");
  stroke("black"); 
  strokeWeight(5);

  for(var i = 0; i< painting.length; i++){
    var path = painting[i];
    beginShape();
    for(var p = 0; p< path.length; p++){
        vertex(path[p].x, path[p].y);
    }
    endShape();
  }

}
   

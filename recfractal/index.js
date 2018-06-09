let canvas = document.getElementById("draw");
let ctx = canvas.getContext("2d");

let centerX = canvas.width / 2;
let trunkHeight = 100;
let branchLenghtRatio = 2/3;
let branchAngleDifference = Math.PI / 3;
let branchingDepth = 10;

function drawTree(x1, y1, x2, y2, branchLength, branchAngle, depth) {
  if (depth == 0)
    return;
  else
  {

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.fillStyle = "yellow";
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();


    branchLength *= branchLenghtRatio;
    
    function branch(angle){
      let branchX2 = x2 + branchLength * Math.cos(angle);
      let branchY2 = y2 + branchLength * Math.sin(angle);
      drawTree(x2, y2, branchX2, branchY2, branchLength, angle, depth -1);   
    }
    
    //Right

    branch(branchAngle + branchAngleDifference);
    //Left
    branch(branchAngle - branchAngleDifference);


  }
}

draw();

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let x1 = centerX;
    let y1 = canvas.height;
    let x2 = centerX;
    let y2 = canvas.height - trunkHeight;
    drawTree(x1, y1, x2, y2, trunkHeight, - Math.PI / 2, branchingDepth);
    requestAnimationFrame(draw);
  }
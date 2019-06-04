// Your code here
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    var rightNums = dodger.style.left.replace("px", "");
    var right = parseInt(rightNums, 10);

    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
    }  
}
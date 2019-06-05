// // Your code here
// let dodger = document.getElementById("dodger");
//
// dodger.style.backgroundColor = "#FF69B4";
//
// dodger.style.right; // "180px"
// dodger.style.bottom; // "0px"
//
// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowRight") {
//     var leftNumbers = dodger.style.left.replace("px", "");
//     var left = parseInt(leftNumbers, 10);
//
//     dodger.style.left = `${left - 1}px`;
//   }
// });

let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
};

function moveDodgerRight() {
  var rightNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(rightNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
};


document.addEventListener("keydown", function(e) {

  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }

  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  };

});

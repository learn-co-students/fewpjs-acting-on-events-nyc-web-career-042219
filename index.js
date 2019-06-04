// Your code here
const moveDodgerLeft = () => {
    let dodger = document.getElementById('dodger');
    let leftNums = dodger.style.left.replace('px', '');
    let left = parseInt(leftNums);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

const moveDodgerRight = () => {
    let dodger = document.getElementById('dodger');
    let leftNums = dodger.style.left.replace('px', '');
    let left = parseInt(leftNums);
    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}
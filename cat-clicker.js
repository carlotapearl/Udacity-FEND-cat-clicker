//Project Requirements for Cat Clicker
//Visuals
//The application should display a picture of a cat and a number of clicks.
//The specifics of the layout do not matter, so style it however you'd like.
//Interaction
//The number of clicks should increment when the cat picture is clicked.

const kittyImage = document.getElementById('kitty');
const clickCount = document.getElementById('clicker');
let count = 0;

function setCount(count) {
    clickCount.innerText = count;
}
kittyImage.addEventListener('click', () => {
  setCount(++count);
  
}, false);
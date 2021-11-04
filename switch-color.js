const bodyRef = document.querySelector('body');
const startChangeColorRef = document.querySelector('.start-btn-js');
const stopChangeColorRef = document.querySelector('.stop-btn-js');

let intervalId = null;
let isActive = false;

startChangeColorRef.addEventListener('click', function () {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    switchColor();
  }, 100);
});
stopChangeColorRef.addEventListener('click', function () {
  clearInterval(intervalId);
  isActive = false;
});
function switchColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function rand(num) {
  return Math.floor(Math.random() * num);
}
function getRandomColor() {
  return `rgb(${rand(255)},${rand(255)},${rand(255)})`;
}

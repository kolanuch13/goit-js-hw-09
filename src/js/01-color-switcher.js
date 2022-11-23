
const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let disabled = startBtn.getAttribute("disabled");
let timerId = null;

startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        body.style.backgroundColor = `${getRandomHexColor()}`
    }, 1000);
    startBtn.setAttribute("disabled", "disabled");
})

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.removeAttribute("disabled");
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

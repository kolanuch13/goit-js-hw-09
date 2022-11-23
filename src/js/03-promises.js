import Notiflix from 'notiflix';

const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const delaysAmount = document.querySelector('[name="amount"]');
const form = document.querySelector('form');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay+Number(firstDelay.value)}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay+Number(firstDelay.value)}ms`);
      }
    }, delay);
    }, firstDelay.value)
    })
  return promise;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (let i = 1; i <= delaysAmount.value; i++) {
    createPromise(i, Number(delayStep.value)*i)
    .then(result => {
      Notiflix.Notify.success(result);
    })
    .catch(error => {
      Notiflix.Notify.failure(error);
    })
  }
})

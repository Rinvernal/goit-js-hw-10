import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector('form');
const delayEl = document.querySelector('input[name="delay"]');
const fulfilledEl = document.querySelector('input[value="fulfilled"]');
const rejectedEl = document.querySelector('input[value="rejected"]');
const btnEl = document.querySelector('input[type="submit"]');

formEl.addEventListener('submit', onSubmit);


function onSubmit(event) {
  event.preventDefault();

  const delay = parseInt(delayEl.value);
  const state = fulfilledEl.checked ? 'fulfilled' : 'rejected';

  formPromise(delay, state)
    .then(success => iziToast.success({
    position: "topCenter",
    message: success,
  }))
    .catch(error => iziToast.error({
    position: "topCenter",
    message: error,
  }));
  
  formEl.reset();
};
const formPromise = (delay, state) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve (`✅ Fulfilled promise in ${delay}ms`)
      } else {
        reject (`❌ Rejected promise in ${delay}ms`)
      }
    }, delay);
  })
};





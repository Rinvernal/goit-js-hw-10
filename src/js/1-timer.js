// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
flatpickr("#datetime-picker", {});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const btn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

let userSelectedDate = null;



function timer() {
  const intervalId = setInterval(() => {
    const now = new Date();
    const delta = userSelectedDate - now;

    if (delta <= 0) {
      clearInterval(intervalId);
      return;
    }
    const {days, hours, minutes, seconds} = convertMs(delta);
    days.textContent = addLeadingZero(days);
    hours.textContent = addLeadingZero(hours);
    minutes.textContent = addLeadingZero(minutes);
    seconds.textContent = addLeadingZero(seconds);
  }, 1000);
}





function onClose(selectedDate) {
  userSelectedDate = selectedDate[0];
  if (userSelectedDate < new Date()) {
    window.alert("Please choose a date in the future");
    btn.isActive = true;
  } else {
    btn.isActive = false;
  }
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}









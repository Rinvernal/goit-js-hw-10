function timer() {
  intervalId = setInterval(() => {
    const now = new Date();
    const delta = userSelectedDate - now;

    if (delta <= 0) {
      clearInterval(intervalId);
      return;
    }

    // Використовуємо функцію convertMs для обчислення часу
    const { days, hours, minutes, seconds } = convertMs(delta);

    // Оновлюємо DOM елементи
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
  }, 1000); // Оновлюємо кожну секунду
}

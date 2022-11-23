import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const inputDate = document.querySelector('#datetime-picker');

const daysLeft = document.querySelector('[data-days]');
const hoursLeft = document.querySelector('[data-hours]');
const minutesLeft = document.querySelector('[data-minutes]');
const secondsLeft = document.querySelector('[data-seconds]');

const buttonDate = document.querySelector('button');
buttonDate.setAttribute("disabled", "disabled");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
     onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
        Notiflix.Notify.failure("Please choose a date in the future");
    } else {
        buttonDate.removeAttribute("disabled");
    }
    },
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
};

const fp = flatpickr(inputDate, options);

const timer = {
    start() {
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = fp.selectedDates[0] - currentTime;
            const {days, hours, minutes, seconds} = convertMs(deltaTime);
            
            daysLeft.textContent = addLeadingZero(days);
            hoursLeft.textContent = addLeadingZero(hours);
            minutesLeft.textContent = addLeadingZero(minutes);
            secondsLeft.textContent = addLeadingZero(seconds);

            if (deltaTime < 1000) {
                clearInterval(this.intervalId);
            }
        }, 1000);
    }
}

buttonDate.addEventListener('click', () => {
    timer.start();
});

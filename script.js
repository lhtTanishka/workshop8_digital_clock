let clockFormat = 24;
let selectedTimezone = 'Asia/Kolkata';

function updateClock() {
  const timeElement = document.getElementById('time');
  const timezoneElement = document.getElementById('timezone-selector');
  const date = new Date(new Date().toLocaleString("en-US", {timeZone: selectedTimezone}));

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (clockFormat === 12) {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    timeElement.innerHTML = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} ${ampm}`;
  } else {
    timeElement.innerHTML = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }
}

function toggleFormat() {
  clockFormat = clockFormat === 24 ? 12 : 24;
  updateClock();
}

document.getElementById('timezone-selector').addEventListener('change', (event) => {
  selectedTimezone = event.target.value;
  updateClock();
});

setInterval(updateClock, 1000);
updateClock(); 

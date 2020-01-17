let clock = document.querySelector('.clock');
let timeOff = new Date('january 17 2020 18:30:00');

const calculateClock = () => {
  let now = new Date();
  let timeDiff = timeOff.getTime() - now.getTime();
  if (timeDiff < 0) {
    alert('GO HOME!!!');
    clearInterval(calculateClock);
  }
  let h = timeOff.getHours() - now.getHours();
  let m = timeOff.getMinutes() - now.getMinutes() - 1;
  let s = 59 - now.getSeconds();
  let html = `
  <span>${h}</span> :
  <span>${m}</span> :
  <span>${s}</span>
  `;
  clock.innerHTML = html;
};

setInterval(calculateClock, 1000);

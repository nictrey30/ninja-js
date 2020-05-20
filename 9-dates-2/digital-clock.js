const clock = document.querySelector('.clock');
const tick = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const html = `
    <span>${('0' + h).slice(-2)}</span> :
    <span>${('0' + m).slice(-2)}</span> :
    <span>${('0' + s).slice(-2)}</span>
  `;
  clock.innerHTML = html;
};
setInterval(tick, 1000);

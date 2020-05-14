const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
  console.log('OI! My content is copyright!');
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', (e) => {
  box.textContent = `coord X:${e.offsetX}, coord Y:${e.offsetY}`;
});

document.addEventListener('wheel', (e) => {
  console.log(e.pageX, e.pageY);
});

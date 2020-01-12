let paras = document.querySelectorAll('p');
let parasArray = Array.prototype.slice.call(paras);

parasArray.forEach(el => {
  if (el.textContent.includes('error')) {
    // el.classList.add('error');
    // el.textContent = el.textContent.replace('error', '');
    replaceText(el, 'error');
  } else if (el.textContent.includes('success')) {
    // el.classList.add('success');
    // el.textContent = el.textContent.replace('success', '');
    replaceText(el, 'success');
  }
});

function replaceText(p, text) {
  p.classList.add(text);
  p.textContent = p.textContent.replace(text, '');
}

// .innerText gives us all the visible text inside the element
// .textContent gives us all the  text inside the element, regardless it is visible or not

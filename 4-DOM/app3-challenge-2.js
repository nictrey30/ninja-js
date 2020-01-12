let paras = document.querySelectorAll('p');
Array.from(paras).forEach(pTag => {
  switch (true) {
    case pTag.innerText.includes('error'):
      pTag.classList.add('error');
      pTag.innerText = pTag.textContent.replace('error', '');
      break;
    case pTag.innerText.includes('success'):
      pTag.classList.add('success');
      pTag.innerText = pTag.textContent.replace('success', '');
      break;
  }
});

///Elements
const btnCheck = document.querySelector('.counter-check');
const btnClear = document.querySelector('.counter-clear');
let wordsNumber = document.querySelector('.counter-message');

//EventListener
btnCheck.addEventListener('click', () => {
  let textWords = document.getElementById('box').value;

  let removeChar = textWords.replace(/[^A-Za-z]\s+/g, ' ');

  let finalNumber = removeChar.trim().split(' ');

  wordsNumber.innerHTML = `Words: ${finalNumber.length}`;

  wordsNumber.style.display = 'initial';
});

btnClear.addEventListener('click', () => {
  document.getElementById('box').value = '';

  wordsNumber.style.display = 'none';
});

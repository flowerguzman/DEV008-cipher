const cipher = {
  // ...
};

export default cipher;

const btnCifrar = document.querySelector ('#cifrar');
const btnDescifrar = document.querySelector ('#descifrar');
const key = document.querySelector ('#key');

const listLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

let newText = '';

btnCifrar.addEventListener ('click' , () => {
  const textarea = document.querySelector ('#text');
  const keyValue = Number (key.value);
  for (let letter of textarea.value){
    letter = letter.toUpperCase();
    if (!listLetters.includes(letter)) {
      continue
    }

    const indexLetter = listLetters.findIndex ((item) => item === letter);
    let indexNewLetter = indexLetter + keyValue

    if(indexNewLetter > 25) {
      indexNewLetter -= 26;
    }

    newText += listLetters[indexNewLetter]
    textarea.value = newText
  }

  newText = '';
});

btnDescifrar.addEventListener ('click' , () => {
  const textarea = document.querySelector ('#text');
  const keyValue = Number (key.value);
  for (const letter of textarea.value){
    if (!listLetters.includes(letter)) {
      continue
    }

    const indexLetter = listLetters.findIndex ((item) => item === letter);
    let indexNewLetter = indexLetter - keyValue

    if(indexNewLetter < 0) {
      indexNewLetter += 26;
    }

    newText += listLetters[indexNewLetter]
    textarea.value = newText;
  }

  newText = '';
});



 
// Crea una función que sea capaz de elimar el boton que pulsas

const buttons = document.getElementById('buttons');

const button = event => {
  event.target.remove();
};

buttons.addEventListener('click', button);

// Crea una función que elimine el botón siguiente al que has pulsado, si no hubiera botón siguiente, elimina el anterior, y no hay ni anterior ni siguiente se elimina el mismo.

const buttonsFamily = document.getElementById('buttons-family');

const buttonFamily = event => {
  if (event.target.tagName === 'BUTTON') {
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.remove();
    } else if (event.target.previousElementSibling) {
      event.target.previousElementSibling.remove();
    } else {
      event.target.remove();
    }
  }
};

buttonsFamily.addEventListener('click', buttonFamily);

// Crea una función que permita añadir elementos a la lista con la misma estructura que te doy en el ejemplo, además cada vez que pulses el botón de la X debe eliminar el elemento de la lista que has pulsado.

const buttonElement = document.getElementById('buttonElement');
const ulElement = document.getElementById('ulElement');
let number = 0;

buttonElement.addEventListener('click', () => {
  number = number + 1;

  const newLi = document.createElement('li');
  newLi.textContent = `Elemento ${number}`;

  const newButton = document.createElement('button');
  newButton.textContent = 'x';

  ulElement.append(newLi);
  newLi.append(newButton);
});

ulElement.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove();
  }
});

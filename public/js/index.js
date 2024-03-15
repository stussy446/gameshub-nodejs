/* eslint-disable */
import { createNewGame } from './getGameFormData';

const nameInput = document.querySelector('#name');
const ratingInput = document.querySelector('#rating');
const lengthInput = document.querySelector('#length');
const platformInput = document.querySelector('#platform');

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  createNewGame(
    nameInput.value,
    ratingInput.value * 1,
    lengthInput.value * 1,
    platformInput.value,
  );
});

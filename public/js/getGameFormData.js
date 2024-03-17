const createNewGame = async (name, rating, length, platform) => {
  platform = platform.split(',');

  const body = { name, rating, length, platform };

  console.log(body);

  const res = await axios
    .post('http://localhost:3001/games', body)
    .then((res) => {
      alert(`${body.name} successfully added!`);
      window.setTimeout(() => {
        location.assign('/overview');
      }, 1500);
    })
    .catch((err) => console.log(err.message));
};

// logic for submitting form to add a new game
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

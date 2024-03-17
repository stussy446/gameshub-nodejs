// logic for deleting game
const deleteGame = async (id) => {
  try {
    const res = await axios({
      method: 'DELETE',
      url: `http://localhost:3001/games/${id}`,
    });

    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};

const deleteButton = document.querySelector('#delete');
const gameID = deleteButton.getAttribute('gameID');
deleteButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(`delete id is ${gameID}`);
  deleteGame(gameID);
});

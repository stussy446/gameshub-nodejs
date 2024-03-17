// logic for deleting game
const deleteGame = async (id) => {
  try {
    const res = await axios({
      method: 'DELETE',
      url: `http://localhost:3001/games/${id}`,
    });

    alert('Game deleted, press ok to return to All Games page');
    window.setTimeout(() => {
      location.assign('/overview');
    }, 500);
  } catch (err) {
    console.log(err.message);
  }
};

const deleteButton = document.querySelector('#delete');
const gameID = deleteButton.getAttribute('gameID');
deleteButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (confirm('Are you sure you want to delete this game?')) {
    deleteGame(gameID);
  }
});

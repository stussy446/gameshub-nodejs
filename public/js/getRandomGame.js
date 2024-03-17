let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

const getRandomGame = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3001/randomGame',
    });
    alert('name generated, take a look at your terminal!');
  } catch (err) {
    console.log(err.message);
  }
};

// logic for generating a random game on the random route
document.querySelector('#random').addEventListener('click', (e) => {
  e.preventDefault();
  getRandomGame();
});

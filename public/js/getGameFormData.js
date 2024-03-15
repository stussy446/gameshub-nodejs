/* eslint-disable */
import axios from 'axios';

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

export const createNewGame = async (name, rating, length, platform) => {
  platform = platform.split(',');

  const body = { name, rating, length, platform };

  console.log(body);

  const res = await axios
    .post('http://localhost:3001/games', body, axiosConfig)
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
};

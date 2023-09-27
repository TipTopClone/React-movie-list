import axios from 'axios';
const apiUrl = 'http://www.omdbapi.com/?apikey=7bdd156c&t=';

export const fetchMovie = async (str) => {
  //promise
  //   axios.get(apiUrl).then((response) => {
  //     console.log(response);
  //   });

  //async/await
  try {
    const response = await axios.get(apiUrl + str);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

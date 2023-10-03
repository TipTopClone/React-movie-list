import { useState } from 'react';
import './App.css';
import { Display } from './Components/Display';
import { SearchForm } from './Components/SearchForm';

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToMovieList = (movie) => {
    //replace
    // => first remove then add

    const filterdArg = movieList.filter((itm) => itm.imdbID !== movie.imdbID);
    setMovieList([...filterdArg, movie]);
    // setMovieList([...movieList, movie]);
  };

  const handleOnDelete = (id) => {
    const mov = movieList.filter(({ imdbID }) => imdbID !== id);
    setMovieList(mov);
    // setDMovie(mov);
  };

  // const moveFilter = (mode) => {
  //   if (!mode) {
  //     return setDMovie(movieList);
  //   }
  //   setDMovie(movieList.filter((itm) => itm.mode === mode));
  // };

  console.log(movieList);
  return (
    <div className='wrapper bg-dark text-warning min-vh-100'>
      <div className='container'>
        {/* title  */}
        <div className='row'>
          <div className='col'>
            <h1 className='mt-5 text-center'>My Movie Collections</h1>
          </div>
        </div>
        <hr />

        {/* search area  */}
        {/* => form  */}
        {/* => card  */}
        <SearchForm addToMovieList={addToMovieList} />

        {/* movie list section  */}
        {/* => buttons  */}
        {/* => cards */}
        <Display movieList={movieList} handleOnDelete={handleOnDelete} />
      </div>
    </div>
  );
}

export default App;

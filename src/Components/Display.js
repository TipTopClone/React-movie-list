import React, { useEffect, useState } from 'react';
import { CustomCard } from './CustomCard';

export const Display = ({ movieList, handleOnDelete }) => {
  const [displayMovie, setDisplayMovie] = useState([]);

  useEffect(() => {
    setDisplayMovie(movieList);
  }, [movieList]);

  const movieFilter = (mode) => {
    if (!mode) {
      return setDisplayMovie(movieList);
    }

    const filteredMovie = movieList.filter((movie) => movie.mode === mode);

    setDisplayMovie(filteredMovie);
  };
  return (
    <div className='bg-black p-5 rounded shadow-lg mt-5 '>
      <div className='row'>
        <div className='col'>
          <div class='btn-group' role='group' aria-label='Basic example'>
            <button
              type='button'
              class='btn btn-primary'
              onClick={() => movieFilter('')}
            >
              All
            </button>
            <button
              type='button'
              class='btn btn-warning'
              onClick={() => movieFilter('happy')}
            >
              Happy
            </button>
            <button
              type='button'
              class='btn btn-info'
              onClick={() => movieFilter('action')}
            >
              Action
            </button>
          </div>
          <div className='mt-3'>{displayMovie.length} movies found!</div>
          <hr />
        </div>
      </div>

      <div className='row'>
        <div className='col d-flex flex-wrap gap-3 justify-content-between'>
          {displayMovie.map((item, i) => (
            <CustomCard
              key={i}
              movie={item}
              deleteFun={() => handleOnDelete(item.imdbID)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

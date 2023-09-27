import React from 'react';
import { CustomCard } from './CustomCard';

export const Display = ({ movieList }) => {
  return (
    <div className='bg-black p-5 rounded shadow-lg mt-5 '>
      <div className='row'>
        <div className='col'>
          <div class='btn-group' role='group' aria-label='Basic example'>
            <button type='button' class='btn btn-primary'>
              All
            </button>
            <button type='button' class='btn btn-warning'>
              Happy
            </button>
            <button type='button' class='btn btn-info'>
              Action
            </button>
          </div>
          <div className='mt-3'>5 movies found!</div>
          <hr />
        </div>
      </div>

      <div className='row'>
        <div className='col d-flex flex-wrap gap-3 justify-content-between'>
          {movieList.map((itme, i) => (
            <CustomCard key={i} movie={itme} />
          ))}
        </div>
      </div>
    </div>
  );
};

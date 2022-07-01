import React from "react";

const Genre = ({ genreListArray, buttonClickHandler }) => {
  return (
    <div className='genre-list'>
      {genreListArray.map((momo) => {
        return (
          <button
            key={momo}
            className='genre-button'
            onClick={() => {
              buttonClickHandler(momo);
            }}>
            <h2>{momo}</h2>
          </button>
        );
      })}
    </div>
  );
};

export default Genre;

import React from "react";
import SuggestionItems from "./SuggestionItems";

const Suggestions = ({ genreData, genre }) => {
  return (
    <div className='suggestions'>
      <h1 className='suggestions-header'>{genre} Suggestions</h1>
      {genreData.map((cardData) => {
        return (
          <div>
            <hr />
            <SuggestionItems movie={cardData} />
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;

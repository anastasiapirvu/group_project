import React from 'react';

const SearchResultDisplay = ({data}) => {

  return (
    <ul>
      {
        data.map(
          ingredient => (<li key={ingredient.id}><img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}></img> {ingredient.name}</li>)
        )
      }
    </ul>
  )
};

export default SearchResultDisplay

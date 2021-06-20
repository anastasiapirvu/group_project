import React, { useState, useEffect } from 'react';
// import TopThree from "./TopThree";
import './IngredientSearch.css';

const SearchResultDisplay = ({data}) => {
  console.log(data)

  return (
    <ul>
      {
        data.map(
          ingredient => (<li key={ingredient.id}><img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}></img> {ingredient.name}</li>)
        )
      }
    </ul>
  )
}

function IngredientSearch(props) {

// const [allIngredients,setAllIngredients] = useState([]);
// const [filterIngredients,setFilterIngredients] = useState();

const [searchInput, setSearchInput] = useState("");
const [searchResult, setSearchResult] = useState([]);

  useEffect(  
    () => {
      getData().then(
        response => setSearchResult(response.results)
      )

    }, [searchInput]);

  async function getData() {
    let URL = `https://api.spoonacular.com/food/ingredients/search?query=${searchInput}&number=3&sort=calories&sortDirection=desc`

      let response = await fetch(URL);
      return response.json();
  }



  return (
    <>
    <div className="IngredientSearch">
      <input 
      type="text" 
      placeholder="What's in my fridge..."
      
      onChange={
        (input) => {
          setSearchInput(input.target.value)
          
        }
      }search
    />
    </div>
    {searchResult && <SearchResultDisplay data={searchResult} />}
    </>
  );
};

export default IngredientSearch;
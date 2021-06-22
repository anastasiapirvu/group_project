import React, { useState } from 'react';
import './IngredientSearch.css';

function IngredientSearch() {

const API_KEY = process.env.REACT_APP_API_KEY;
const baseURL = "https://api.spoonacular.com/recipes"  


// State for searching recipes
const [searchInput, setSearchInput] = useState("");

// State for getting recipes from API
const [searchResult, setSearchResult] = useState([]);


const [featRecipe, setFeatRecipe] = useState(null);


const [loading, setLoading] = useState(false);
const [error, setError] = useState("");




  async function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function getRecipes(ingredients){
    setLoading(true);
    // setSearchResult(null);
    setError("");

    let URL = `${baseURL}/findByIngredients?ingredients=${ingredients}&number=3&ranking=1&ignorePantry=true&apiKey=${API_KEY}`

    await pause(500);

    try{
      let response = await fetch(URL);
      console.log(response.json);
      if(response.ok) {
        let data = await response.json();
        setSearchResult(data);
      } else {
        setError(`Server Error: ${response.status} ${response.statusText}`)
      }
    } catch (err) {
      setError(`Network err: ${err.message}`);
    }
    setLoading(false)
  }

  
  function handleSubmit(event) {
    event.preventDefault();
    getRecipes(searchInput);
    setSearchInput("");
  }


  return (
    <>
   <div className="IngredientSearch">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What's in my fridge..."
            value={searchInput}
            onChange={input => {
              setSearchInput(input.target.value);
            }}
          />
          <button type="submit">Get Recipe</button>
        </form>
      </div>
      
    {loading && <h3>LOADING...</h3>}
    {error && <h3 style={{ color: "red"}}>{error}</h3>}

    {searchResult && searchResult.map(recipe =>(
    <div key={recipe.id}>
    {recipe.title} ({recipe.missedIngredientCount})
    <img src={recipe.image}/>
  </div>

    ))}

    </>
  );
};

export default IngredientSearch;
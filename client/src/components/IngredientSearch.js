import React, { useState, useEffect } from 'react';
import './IngredientSearch.css';

function IngredientSearch() {

const API_KEY = process.env.REACT_APP_API_KEY;
const baseURL = "https://api.spoonacular.com/recipes"  


// State for searching recipes
const [searchInput, setSearchInput] = useState("");

// State for getting recipes from API
const [searchResult, setSearchResult] = useState([]);

// State that only submits itself after clicking the search button
const [query, setQuery] = useState("");


const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const [featRecipe, setFeatRecipe] = useState(null);


  async function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function getRecipes(ingredients){
    setLoading(true);
    setSearchResult(null);
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
    console.log("my search in handleSubmit is "+searchInput)
    event.preventDefault();
    getRecipes(searchInput);
    setSearchInput("");
  }


  return (
    <>
    <div className="IngredientSearch">
    <form>
      <input 
      type="text" 
      placeholder="What's in my fridge..."

      onSubmit={handleSubmit}
      
      onChange={
        (input) => {
          setSearchInput(input.target.value)
          
        }
      }
    />
        <button type="submit">Search</button>
      </form>
    </div>
    {loading && <h3>LOADING...</h3>}
    {error && <h3 style={{ color: "red"}}>{error}</h3>}
    {/* {searchResult.map => (r) */}

    </>
  );
};

export default IngredientSearch;
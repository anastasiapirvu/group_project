import React, { useState, useEffect } from 'react';
import './IngredientSearch.css';

function IngredientSearch() {


// State for searching recipes
const [searchInput, setSearchInput] = useState("");

// State for getting recipes from API
const [searchResult, setSearchResult] = useState([]);

// State that only submits itself after clicking the search button
const [query, setQuery] = useState("");


const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
// const [recipes, setRecipes] = useState(null);
const [featRecipe, setFeatRecipe] = useState(null);

const API_KEY = process.env.REACT_APP_API_KEY;
const baseURL = "https://api.spoonacular.com/recipes"

  useEffect(  
    () => {
      getRecipes()
      
      .then(
        response => {
          console.log(response)
          setSearchResult(response.results)
        }
      )

    }, [query]); // query value (instead of passing search value) since every time writing a letter, the data would be fetched - limited API calls



  async function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function getRecipes(ingredients){
    setLoading(true);
    setSearchResult(null);
    setError("");

    let URL = `${baseURL}/findByIngredients?ingredients=${ingredients}&number=5&limitLicense=<boolean>&ranking=1&ignorePantry=true&apiKey=${API_KEY}`

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
    setQuery(searchInput);
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
      }search // what does this do??
    />
        <button type="button">Search</button>
      </form>
    </div>
    {loading && <h3>LOADING...</h3>}
    {error && <h3 style={{ color: "red"}}>{error}</h3>}
    {searchResult && <SearchResultDisplay data={searchResult} />}

    </>
  );
};

export default IngredientSearch;
import React, { useState, useEffect } from 'react';
import './IngredientSearch.css';

function IngredientSearch() {

const API_KEY = "0b23ccfca05f4b35955deadd04f7d419"
const baseURL = "https://api.spoonacular.com/recipes"  

// State for getting recipes from API
const [recipes, setRecipes] = useState([]);

// State for searching recipes
const [search, setSearch] = useState("");


// State that only submits itself after clicking the search button
const [query, setQuery] = useState("");



  useEffect(  
    () => {
      getRecipes()
      
      .then(
        response => {
          console.log(response)
          setRecipes(response.results)
        }
      )

    }, [query]); // query value (instead of passing search value) since every time writing a letter, the data would be fetched - limited API calls


  async function getRecipes() {

    let URL = `${baseURL}/findByIngredients?ingredients=${query}&number=5&limitLicense=<boolean>&ranking=1&ignorePantry=true&apiKey=${API_KEY}`
      let response = await fetch(URL);

      console.log("my response in getRecipes is "+response)
      return response.json();
  }


  function handleSubmit(event) {
    console.log("my search in handleSubmit is "+search)
    event.preventDefault();
    setQuery(search);
    setSearch("");
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
          setSearch(input.target.value)
          
        }
      }search // what does this do??
    />
        <button type="button">Search</button>
      </form>
    </div>

    {recipes && recipes.map(r =>(
          <div key={r.id} >
            <p> {r.title}, Missing Ingredients: {r.missedIngredientCount} </p>
            <img src={r.image} alt={r.title}/>
          </div>))}
    </>
  );
};

export default IngredientSearch;
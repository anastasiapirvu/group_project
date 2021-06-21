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
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
// const [recipes, setRecipes] = useState(null);
const [featRecipe, setFeatRecipe] = useState(null);

const API_KEY = process.env.REACT_APP_API_KEY;
const baseURL = "https://api.spoonacular.com/recipes"

  useEffect(  
    () => {
      getData().then(
        response => setSearchResult(response.results)
      )

    }, [searchInput]);

  async function getData() { //what data is this?
    let URL = `https://api.spoonacular.com/food/ingredients/search?query=${searchInput}&number=3&sort=calories&sortDirection=desc`

      let response = await fetch(URL);
      return response.json();
  }

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
    {loading && <h3>LOADING...</h3>}
    {error && <h3 style={{ color: "red"}}>{error}</h3>}
    {searchResult && <SearchResultDisplay data={searchResult} />}
    </>
  );
};

export default IngredientSearch;
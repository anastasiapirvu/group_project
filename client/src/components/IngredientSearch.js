import React, { useEffect, useState } from 'react';
import './IngredientSearch.css';
import TopThree from './TopThree'
import RecipePage from './RecipePage'


function IngredientSearch(props) {

const API_KEY = process.env.REACT_APP_API_KEY;
const baseURL = "https://api.spoonacular.com/recipes"  


// State for searching recipes
const [searchInput, setSearchInput] = useState("");

// State for getting recipes from API
const [searchResult, setSearchResult] = useState([]);


const [recipe, setRecipe] = useState([]);


const [loading, setLoading] = useState(false);
const [error, setError] = useState("");




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

  async function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  // async function getRecipeSummary(id){
  //       setLoading(true);
  //       setError("");
    
  //       let URL = `${baseURL}/${id}/summary?apiKey=${API_KEY}`;
  //       console.log(URL)
  //       await pause(500);
    
  //       try{
  //         let response = await fetch(URL);
  //         console.log(response.json);
  //         if(response.ok) {
  //           let data = await response.json();
  //           setRecipeSummary(data)
  //           console.log('test');
  //         } else {
  //           setError(`Server Error: ${response.status} ${response.statusText}`)
  //         }
  //       } catch (err) {
  //         setError(`Network err: ${err.message}`);
  //       }
  //       setLoading(false)
  //     }


  
  function handleSubmit(event) {
    event.preventDefault();
    getRecipes(searchInput);
    setSearchInput("");
  }


  return (
    <>
        <div className="IngredientSearch">
            {/* Starting from 'md' breakpoint, leave 3 empty cols to left of form spanning 6 cols */}
            <div className="offset-md-3 col-md-6">
                <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
                    <div className="search-group">
                        <label htmlFor="exampleInputEmail1"></label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1" 
                          aria-describedby="emailHelp"
                          placeholder="What's in my fridge..."
                          value={searchInput}
                          onChange={input => {
                            setSearchInput(input.target.value);
                          }}
                        /> 
                        <small className="form-text text-muted">Do not include spaces after commas: e.g. Banana,Chocolate,Almonds</small>
                    </div>

                    <button type="submit" className="btn btn-primary mr-2">Get Recipe</button>
                </form>
            </div>
        </div>
      
    {loading && <h3>LOADING...</h3>}
    {error && <h3 style={{ color: "red"}}>{error}</h3>}

    {/* {searchResult && searchResult.map(recipe =>(
    <div key={recipe.id}>
    {recipe.title} ({recipe.missedIngredientCount})
    <img src={recipe.image}/> */}
    {/* ))} */}
    
    {recipe.missedIngredients && <RecipePage recipe={recipe}/>}
    {searchResult && <TopThree userId = {props.userId} topThree={searchResult} setFeatCb = {(recipe => setRecipe(recipe))}/>}

    </>
  );
};

export default IngredientSearch;
import React, { useState } from "react";


function APIfetch() {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState(null);
  const [featRecipe, setFeatRecipe] = useState(null);
  const [error, setError] = useState("");
  const [ingredientList, setIngredientsList] = useState("");
  //do we want the input ingredients stored in state?
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const API_KEY = "f63c37e49c7a401d9a639c55ed778b11";
  const baseURL = "https://api.spoonacular.com/recipes/findByIngredients"

  //{{baseUrl}}/recipes/findByIngredients?ingredients=apples,flour,sugar&number=5&limitLicense=<boolean>&ranking=1&ignorePantry=true&apiKey=f63c37e49c7a401d9a639c55ed778b11&includeInstruction=true
  //https://api.spoonacular.com/recipes/findByIngredients/recipes/findByIngredients?ingredients=apples,flour,sugar&number=5&ranking=1&ignorePantry=true&apiKey=f63c37e49c7a401d9a639c55ed778b11
  
  function handleClick(){
    setIngredientsList("apples,flour,sugar")
    getRecipes(ingredientList)
  }


  async function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function getRecipes(ingredientList){
    setLoading(true);
    setRecipes(null);
    setError("");

    let URL = `${baseURL}?ingredients=${ingredientList}&number=5&limitLicense=<boolean>&ranking=1&ignorePantry=true&apiKey=${API_KEY}`

    await pause(5000);

    try{
      let response = await fetch(URL);
      console.log(response.json);
      if(response.ok) {
        let data = await response.json();
        setRecipes(data);
      } else {
        setError(`Server Error: ${response.status} ${response.statusText}`)
      }
    } catch (err) {
      setError(`Network err: ${err.message}`);
    }
    setLoading(false)
  }

    return (
      <div className="APIfetch">
        <h3>API testing is here:</h3>
        <button type="button" onClick={handleClick} >FETCH</button>
    
      </div>
    );
  }
  
  export default APIfetch;
  

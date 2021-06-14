import React, { useState } from "react";


function APIfetch() {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState(null);
  const [featId, setFeatId] = useState(null);
  const [featRecipe, setFeatRecipe] = useState(null);
  const [error, setError] = useState("");
  const [ingredientList, setIngredientsList] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;
  const baseURL = "https://api.spoonacular.com/recipes"
  // console.log(API_KEY)

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

    let URL = `${baseURL}/findByIngredients?ingredients=${ingredientList}&number=5&limitLicense=<boolean>&ranking=1&ignorePantry=true&apiKey=${API_KEY}`

    await pause(500);

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

  function handleRecipe(id){
    setFeatId(id)
    getRecipeMethod(featId)
    console.log(id)
  }

  async function getRecipeMethod(id){
    setLoading(true);
    setFeatRecipe(null);
    setError("");

    let URL = `${baseURL}/${id}/information?includeNutrition=false&apiKey=${API_KEY}`
    console.log(URL)
    await pause(500);

    try{
      let response = await fetch(URL);
      console.log(response.json);
      if(response.ok) {
        let data = await response.json();
        setFeatRecipe(data);
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
        
        {loading && <h3>LOADING...</h3>}

        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        
        {featRecipe && <h4 style={{ color: "green" }}>Selected Recipe: {featRecipe.title}</h4>}
        

        { recipes && recipes.map((r) =>(
          <div key={r.id} >
            <p> {r.title}, Missing Ingredients: {r.missedIngredientCount} </p>
            <img src={r.image} alt={r.title} onClick={ () => handleRecipe(r.id)}/>
          </div>))}
    
      </div>
    );
  }
  
  export default APIfetch;
  

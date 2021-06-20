import React, { useState } from "react";


function APIfetch(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const baseURL = "https://api.spoonacular.com/recipes"

  // let clickedId = props.clickedId
  
  function getRecipesFromIngredients(ingredientList){
    getRecipes(ingredientList) //props.ingredients go here
  }

  async function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  let ingredients = props.ingredientsSearch

  async function getRecipes(ingredients){
    setLoading(true);
    props.setRecipesCb(null);
    setError("");

    let URL = `${baseURL}/findByIngredients?ingredients=${ingredients}&number=5&limitLicense=<boolean>&ranking=1&ignorePantry=true&apiKey=${API_KEY}`

    await pause(500);

    try{
      let response = await fetch(URL);
      console.log(response.json);
      if(response.ok) {
        let data = await response.json();
        props.setRecipesCb(data);
      } else {
        setError(`Server Error: ${response.status} ${response.statusText}`)
      }
    } catch (err) {
      setError(`Network err: ${err.message}`);
    }
    setLoading(false)
  }

    async function getRecipeMethod(id){
    setLoading(true);
    props.setFeatRecipeCb(null);
    setError("");

    let URL = `${baseURL}/${id}/information?includeNutrition=false&apiKey=${API_KEY}`
    console.log(URL)
    await pause(500);

    try{
      let response = await fetch(URL);
      console.log(response.json);
      if(response.ok) {
        let data = await response.json();
        props.setFeatRecipeCb(data);
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
        {/* <button type="button" onClick={handleClick} >FETCH</button> */}
        
        {loading && <h3>LOADING...</h3>}

        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        
      
        

    
      </div>
    );
  }
  
  export default APIfetch;
 

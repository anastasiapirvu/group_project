import React, { useState } from "react";


function APIfetch() {
  const [recipes, setRecipes] = useState({})
  //do we want the input ingredients stored in state?
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const API_KEY = "f63c37e49c7a401d9a639c55ed778b11";
  const baseURL = "https://api.spoonacular.com/recipes/findByIngredients"

  //{{baseUrl}}/recipes/findByIngredients?ingredients=apples,flour,sugar&number=5&limitLicense=<boolean>&ranking=1&ignorePantry=true&apiKey=f63c37e49c7a401d9a639c55ed778b11&includeInstruction=true

    return (
      <div className="APIfetch">
        <h3>API testing is here:</h3>
    
      </div>
    );
  }
  
  export default APIfetch;
  

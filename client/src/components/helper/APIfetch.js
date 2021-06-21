// // import React, { useState } from "react";

// const API_KEY = process.env.REACT_APP_API_KEY;
// const baseURL = "https://api.spoonacular.com/recipes"

// function APIfetch {  

//   async function pause(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

//   async function getRecipes(ingredients){
//     setLoading(true);
//     props.setRecipesCb(null);
//     setError("");

//     let URL = `${baseURL}/findByIngredients?ingredients=${ingredients}&number=5&limitLicense=<boolean>&ranking=1&ignorePantry=true&apiKey=${API_KEY}`

//     await pause(500);

//     try{
//       let response = await fetch(URL);
//       console.log(response.json);
//       if(response.ok) {
//         response.data = await response.json();
//         // props.setRecipesCb(data);
//       } else {
//         response.error = `Server Error: ${response.status} ${response.statusText}`
//       }
//     } catch (err) {
//       response = `Network err: ${err.message}`;
//     }
//     setLoading(false)
//     return response
//   }

//     async function getRecipeMethod(id){
//     setLoading(true);
//     props.setFeatRecipeCb(null);
//     setError("");

//     let URL = `${baseURL}/${id}/information?includeNutrition=false&apiKey=${API_KEY}`
//     console.log(URL)
//     await pause(500);

//     try{
//       let response = await fetch(URL);
//       console.log(response.json);
//       if(response.ok) {
//         let data = await response.json();
//         props.setFeatRecipeCb(data);
//       } else {
//         setError(`Server Error: ${response.status} ${response.statusText}`)
//       }
//     } catch (err) {
//       setError(`Network err: ${err.message}`);
//     }
//     setLoading(false)
//   }


//   }
  
//   export default APIfetch;
 

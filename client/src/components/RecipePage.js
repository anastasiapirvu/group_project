import React from 'react';
import './RecipePage.css';


function RecipePage (){
  //props - recieve ID of featured recipe
    async function pause(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
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
      <div className="RecipePage">
      <h2>Recipe Page</h2>
    </div>
        )

    }        


export default RecipePage;

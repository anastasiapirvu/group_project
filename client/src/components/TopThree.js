import React, { useState } from 'react';
import './TopThree.css';
import starterData from './topThreeStarter.js'
// import RecipePage from './RecipePage'




function TopThree(props){

  const [topThree, setTopThree] = useState(starterData)

  function missedList(recipe){
    let missed = [];
    for (let i = 0; i<recipe.missedIngredients.length; i++){
      missed.push(recipe.missedIngredients[i]["name"])
    }
    return missed;
  }


    return (
        <div className="TopThree">

          {/* {featRecipe && <RecipePage featRecipe ={featRecipe}/>} */}

          <h2>Your Top Three Suggestions</h2>
        <ul>
          {topThree.map(t => (
          <li key ={t.id}>
            {t.title}, 
          </li>

        ))}
        </ul>

      </div>

 
        )}


export default TopThree;
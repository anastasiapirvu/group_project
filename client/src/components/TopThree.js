import React, { useState } from 'react';
import './TopThree.css';
import starterData from './topThreeStarter.js'
// import RecipePage from './RecipePage'




function TopThree(props){

  const [topThree, setTopThree] = useState(starterData); //needs to take from IngrediendSearch
  const [userId, setUserId] = useState(props.userId);

  function missedList(recipe){
    let missed = [];
    let missedString =''
    for (let i = 0; i<recipe.missedIngredients.length; i++){
      missed.push(recipe.missedIngredients[i]["name"])
    }
    for (let i = 0; i<missed.length;i++){
      if (i===missed.length-1){
      missedString+=missed[i]+'.'
    } else {
      missedString+=missed[i]+', '
    }
    }
    return missedString;
  }


  function sortData(t){
    for (let ing of t.missedIngredients){
      if (!ing.unit){
        ing.unit=ing.name; //e.g.  egg has no unit
      }
      addItem(ing.name, ing.amount, ing.unit, userId)
    }
  }
  
  
  
  async function addItem(name, quantity, unit, userId){
    
  }
  
  

    return (
        <div className="TopThree">

          {/* {featRecipe && <RecipePage featRecipe ={featRecipe}/>} */}

          <h2>Your Top Three Suggestions</h2>
          {topThree.map(t => (
          <ul>
          <li key ={t.id}>{t.title}.</li>
          <li><img src={t.image}/></li>
          <li><p>Missing Ingredients: {missedList(t)}</p></li>
          <li><button onClick={e => sortData(t)}>Add to Shopping List</button></li>
          <br/><br/>
          </ul>
        ))}
        

      </div>

 
        )}


export default TopThree;
import React, { useState } from 'react';
import './TopThree.css';
import starterData from './topThreeStarter.js'




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
          <h2>Your Top Three Suggestions</h2>
        {topThree.map(t => (
          <li key ={t.id}>{t.title}
          <br/><img src ={t.image}/>
            <ul><li className = 'subList' key ={t.title}>
              <p>Missing Ingredients: {missedList(t).map(m => m+', ')}</p>
            </li></ul>
          </li>
        )
        )}

      </div>

      

        
            
        )

    }        


export default TopThree;
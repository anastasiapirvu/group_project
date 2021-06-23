import React, { useState } from 'react';
import './TopThree.css';
import starterData from './topThreeStarter.js'
// import RecipePage from './RecipePage'




function TopThree(props){

  const [topThree, setTopThree] = useState(starterData); //needs to take from IngrediendSearch
  const [items, setItems] = useState([])

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
      let ingredient = {};
      if (!ing.unit){
        ing.unit=ing.name; //e.g.  egg has no unit
      }
      ingredient['name'] = ing.name;
      ingredient['quantity'] = ing.amount;
      ingredient['unit'] = ing.unit;
      ingredient['user_id'] = props.userId;
      addItem(ingredient)
    }
  }
  
  //Console logs, but doesn't add to data
  
  async function addItem(ingredient){
    let options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ingredient)
    };
    console.log(typeof ingredient['quantity'])
    try {
      let response = await fetch(`/shoppingList`, options);
      if (response.ok) {
        let items = await response.json();
        setItems(items);
        console.log('added!')
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
    window.location.reload()
  }
  
  

    return (
        <div className="TopThree">

          {/* {featRecipe && <RecipePage featRecipe ={featRecipe}/>} */}

          <h2 className="text-center">Your Top Three Suggestions</h2>
            <div className="row text-center">
              {topThree.map(t => (
              <ul className="col-sm-6 col-md-4 mb-3">
                <li key ={t.id}>{t.title}.</li>
                <li><img src={t.image}/></li>
                <li><p>Missing Ingredients: {missedList(t)}</p></li>
                <li><button onClick={e => sortData(t)}>Add to Shopping List</button></li>
              <br/><br/>
              </ul>
            ))}
            </div>

            <h2 className="text-center">Your Top Three Suggestions - as cards</h2>
            <div className="row">
                {/* Span 50% above 'sm' breakpoint, 25% above 'lg' breakpoint */}
                {topThree.map(t => (
                <ul className="col-sm-6 col-md-4 mb-3">
                  <div className="card" key ={t.id} style={{ backgroundColor: '#FEFFDE' }} className="text-center">
                  <img src={t.image}/>
                    <div className="card-body" >
                      <h5 className="card-title">{t.title}</h5>
                      <p className="card-text">Missing Ingredients: {missedList(t)}</p>
                      <a onClick={e => sortData(t)} className="btn btn-primary">Add to Shopping List</a>
                    </div>
                  </div>
                </ul>
                ))}
            </div>

      </div>

 
        )}


export default TopThree;
import React, { useState } from 'react';
import './TopThree.css';
import starterData from './topThreeStarter.js'
import RecipePage from './RecipePage'
// import RecipePage from './RecipePage'





function TopThree(props){
 
  //const [topThree, setTopThree] = useState(starterData); //needs to take from IngrediendSearch
  const [items, setItems] = useState([])
  const [featId, setFeatId] = useState([])


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
       ingredient['user_id'] = props.userId; // it was complaining that props(before userId) was not defined, 
      //so I tried to remove it and everything works (not sure why though!)
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
  }
  
  

    return (
        <div className="TopThree">

            {/* <h2 className="text-center">Your Top Three Suggestions</h2> */}
            <div className="row">
                {/* Span 50% above 'sm' breakpoint, 25% above 'lg' breakpoint */}
                {props.topThree.map(t => (
                <ul className="col-sm-6 col-md-4 mb-3" key ={t.id} >
                  <div className="card" style={{ backgroundColor: '#FEFFDE' }} className="text-center">
                  <h5 className="card-title card-header">{t.title}</h5>
                  <img src={t.image} className="img-thumbnail"/><br/>
                  <a onClick={e => props.setFeatCb(t.id)} className="btn btn-secondary">More Information</a>
                    <div className="card-body" >
                      <p className="card-text">Missing Ingredients: {missedList(t)}</p>
                      <a onClick={e => sortData(t)} className="btn btn-secondary">Add to Shopping List</a>
                    </div>
                  </div>
                </ul>
                ))}
            </div>

      </div>

 
        )}


export default TopThree;
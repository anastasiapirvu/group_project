
import React, { useState } from "react";
import IngredientSearch from './components/IngredientSearch'
import ShoppingList from './components/ShoppingList';
import TopThree from './components/TopThree';
// import Favorites from "./components/Favorites";
import logo from './images/WhatsInTheFridgeFlat.png'
import topThree from './components/topThreeStarter'

import './App.css';

function App(props) {

  //Hooks
  const [isFavorites, setIsFavorites] = useState(true)
  // const [isRecipie, setIsRecipie] = useState(false) //caution - spelling! Do we need this?
  const [userId, setUserId] = useState(1)
  const [missingIngredients, setMissingIngredients] = useState([]);
  const [featRecipe, setFeatRecipe] = useState([])

  // const handleChangeView = (isFavorites) => {
  //   setIsFavorites(isFavorites)
  // }

  // const getRecipeMethod = (id) => {
  //   console.log(id)
  // }

  function setFeatId(id){
    let ix = topThree.findIndex(t => (t.id ===id));
    setFeatRecipe(topThree[ix]);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: '#52734D' }}>
      {/* "Brand"/Logo */}
      <h1><a className="navbar-brand" href="#">I am Hungry</a></h1>
      <img src = {logo}></img>

      {/* Hamburger Icon */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu Items */}
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
              <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
              <a className="nav-link" href="#">Shopping List</a>
              <a className="nav-link" href="#">Log in</a>
          </div>
      </div>
      </nav>
      
    
    <IngredientSearch />

    <TopThree userId={userId} selectCb={(id)=> setFeatId(id)}/>

    <ShoppingList userId={userId}/>

    </div>
  );

 
  
}

export default App;

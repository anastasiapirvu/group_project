
import React, { useState } from "react";
import APIfetch from './components/helper/APIfetch.js'
import IngredientSearch from './components/IngredientSearch'
import ShoppingList from './components/ShoppingList';
import Favorites from "./components/Favorites";
import Recipies from "./components/Recipies";
import './App.css';


function App() {

  //Hooks
  const [isFavorites, setIsFavorites] = useState(true)
  const [isRecipie, setIsRecipie] = useState(false)


 const handleChangeView = (isFavorites) => {
  setIsFavorites(isFavorites)
}

  return (
    <div className="App">
    <h2>I am Hungry</h2>

    <IngredientSearch/>





    <APIfetch />

    <ShoppingList />
    <nav>
      <button className={isFavorites? "active" : null} onClick={() => handleChangeView(true)}>Favorites</button>
      <button className={!isFavorites? "active" : null} onClick={() => handleChangeView(false)}>Recipie</button>
      </nav>



    { isFavorites ? <Favorites /> 
    : <Recipies />
  }
      

    </div>
  );

 
  
}

export default App;

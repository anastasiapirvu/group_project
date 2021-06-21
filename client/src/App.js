
import React, { useState } from "react";
import IngredientSearch from './components/IngredientSearch'
import ShoppingList from './components/ShoppingList';
import TopThree from './components/TopThree';
import Favorites from "./components/Favorites";
import Recipies from "./components/Recipies";
import './App.css';

function App(props) {

  //Hooks
  const [isFavorites, setIsFavorites] = useState(true)
  const [isRecipie, setIsRecipie] = useState(false) //caution - spelling! Do we need this?
  const [userId, setUserId] = useState(1)


  const handleChangeView = (isFavorites) => {
    setIsFavorites(isFavorites)
  }

  const getRecipeMethod = (id) => {
    console.log(id)
  }

  return (
    <div className="App">
    <h2>I am Hungry</h2>

    <IngredientSearch />

    <TopThree />

    <ShoppingList userId={userId}/>

    </div>
  );

 
  
}

export default App;

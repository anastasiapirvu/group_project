
import React, { useState } from "react";
import APIfetch from './components/helper/APIfetch.js'
import IngredientSearch from './components/IngredientSearch'
import ShoppingList from './components/ShoppingList';
import TopThree from './components/TopThree';
import Favorites from "./components/Favorites";
import Recipies from "./components/Recipies";
import './App.css';


function App(props) {

  //Hooks
  const [isFavorites, setIsFavorites] = useState(true)
  const [isRecipie, setIsRecipie] = useState(false) //caution - spelling!
  const [recipes, setRecipes] = useState(null);
  const [featRecipe, setFeatRecipe] = useState(null);

  // let clickId = 0

  // function handleRecipe(id){
  //   // props.getRecipeMethodCb(id)
  //   clickId = id
  // }

 const handleChangeView = (isFavorites) => {
  setIsFavorites(isFavorites)
}

  return (
    <div className="App">
    <h2>I am Hungry</h2>

    <IngredientSearch />


    <TopThree />


    <APIfetch 
      setRecipesCb={(data) => setRecipes(data)}
      setFeatRecipeCb={(recipeData) => setFeatRecipe(recipeData)}
      // clickedId={clickId}
      handleRecipeCb={()} //how to hand prop down to API
    />

{featRecipe && <h4 style={{ color: "green" }}>Selected Recipe: {featRecipe.title}</h4>}

        {recipes && recipes.map((r) =>(
          <div key={r.id} >
            <p> {r.title}, Missing Ingredients: {r.missedIngredientCount} </p>
            <img src={r.image} alt={r.title} onClick={ () => handleRecipeCb(r.id)}/>
          </div>))}

    <ShoppingList />
    {/* <nav>
      <button className={isFavorites? "active" : null} onClick={() => handleChangeView(true)}>Favorites</button>
      <button className={!isFavorites? "active" : null} onClick={() => handleChangeView(false)}>Recipie</button>
      </nav>



    { isFavorites ? <Favorites /> 
    : <Recipies /> */}
  {/* } */}
      

    </div>
  );

 
  
}

export default App;

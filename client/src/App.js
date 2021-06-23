
import React, { useState } from "react";
import IngredientSearch from './components/IngredientSearch'
import ShoppingList from './components/ShoppingList';
import TopThree from './components/TopThree';
// import Favorites from "./components/Favorites";
import logo from './images/WhatsInTheFridgeFlat.png'
import topThree from './components/topThreeStarter'
import veg from './images/Vegetables.jpg'

import './App.css';

function App(props) {

  //Hooks
  const [isFavorites, setIsFavorites] = useState(true)
  // const [isRecipie, setIsRecipie] = useState(false) //caution - spelling! Do we need this?
  const [userId, setUserId] = useState(1)
  const [missingIngredients, setMissingIngredients] = useState([]);


  // function setFeatId(id){
  //   let ix = topThree.findIndex(t => (t.id ===id));
  //   setFeatRecipe(topThree[ix]);
  // }
  
  return (

  <div className="App" style={{ backgroundColor: '#DDFFBC' }}>

    <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: '#52734D' }}>


      
        {/* "Brand"/Logo */}
        <img className="navbar-brand" className="img-fluid" href="#" src={veg}></img>

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


    <div className="container mt-4">

      <h1 className="text-center" style={{color: '#375433'}}>
        <small class="text-muted">I'm hungry...</small>
          What's in the Fridge?
      </h1>
  

    </div> {/* .container */}
    
    <IngredientSearch />

    <TopThree userId={userId}/>

    <ShoppingList userId={userId}/>

    <footer className="footer text-center p-3 mt-3 bg-secondary text-light">
        <img src = {logo}></img>
        <br />
        A CodeOp Team Project by Abigail Fitzjoshua, Anastatsia Pirvu, Kat Hurdley and Holly Lyford
    </footer>

    </div>
   
  );

 
  
}

export default App;

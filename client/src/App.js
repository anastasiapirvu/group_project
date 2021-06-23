
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

  function setFeatId(id){
    let ix = topThree.findIndex(t => (t.id ===id));
    setFeatRecipe(topThree[ix]);
  }
  
  return (

  <div className="App">

    <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: '#52734D' }}>


      
        {/* "Brand"/Logo */}
        <a className="navbar-brand" href="#">I am Hungry</a>

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

        <h1 className="text-center">Hello!</h1>
  
        <h2>A Grid of Cards</h2>
            <div className="row">
                {/* Span 50% above 'sm' breakpoint, 25% above 'lg' breakpoint */}
                <div className="col-sm-6 col-lg-3 mb-3">
                    <div className="card" >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg/2560px-African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3 mb-3">
                    <div className="card" >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg/2560px-African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3 mb-3">
                    <div className="card" >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg/2560px-African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3 mb-3">
                    <div className="card" >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg/2560px-African_fish_eagle_%28Haliaeetus_vocifer%29_Ethiopia.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
    </div> {/* .container */}



    <footer className="footer text-center p-3 mt-3 bg-secondary text-light">
        <img src = {logo}></img>
        <br />
        A CodeOp Team Project by Abigail Fitzjoshua, Anastatsia Pirvu, Kat Hurdley and Holly Lyford
    </footer>
    
    <IngredientSearch />

    <TopThree userId={userId} selectCb={(id)=> setFeatId(id)}/>

    <ShoppingList userId={userId}/>
    
    </div>
   
  );

 
  
}

export default App;

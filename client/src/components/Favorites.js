/*
import React, { useState } from 'react';
import './Favorites.css';
import Recipies from './Recipies'; //after repies have been passed
//import topThree from './topThree';



//function Favorites (props){


getFavorites = async () => {
    try {
        const results = await fetch("api/favorite/all", { //fetch all favorites
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("token")
        },
    
     });


    //render () {
        const { favorites } = this.state;
        return (
            <div className="Favorites">

            <h1>Add your Favorite recipie!</h1>
            {}
            <IngredientSearchItem
                    key={favorites.id}
                    id={favorites.recipiesId}
                    image={favorites.recipiesImage}
                    />
        </div>
            
     );
          
          
    }   

} 


export default Favorites;
*/
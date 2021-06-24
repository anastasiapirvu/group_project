import React, { useEffect, useState } from 'react';
import './RecipePage.css';


function RecipePage (props){

const API_KEY = process.env.REACT_APP_API_KEY;
const baseURL = "https://api.spoonacular.com/recipes"  

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");


  

  //props - recieve featured recipe

  // let r = props.recipe

    // async function pause(ms) {
    //   return new Promise(resolve => setTimeout(resolve, ms));
    // }

    // async function getRecipeMethod(id){
    //       setLoading(true);
    //       setError("");
      
    //       let URL = `${baseURL}/{${id}/summary?apiKey=${API_KEY}`;
    //       console.log(URL)
    //       await pause(500);
      
    //       try{
    //         let response = await fetch(URL);
    //         console.log(response.json);
    //         if(response.ok) {
    //           let data = await response.json();
    //           setRecipeMethod(data)
    //           console.log('test');
    //         } else {
    //           setError(`Server Error: ${response.status} ${response.statusText}`)
    //         }
    //       } catch (err) {
    //         setError(`Network err: ${err.message}`);
    //       }
    //       setLoading(false)
    //     }


    return (

       <div className="RecipePage">

      <ul className="col-sm-6 col-md-4 mb-3">      
                  <div className="card" key ={props.recipe.id} style={{ backgroundColor: '#FEFFDE' }} className="text-center">
                  <h2>{props.recipe.title}</h2>
                  <img src={props.recipe.image}/><br/>
                    <div className="card-body" >
                      {/* <h5 className="card-title">{props.recipe.title}</h5> */}
                      <ul className="card-text">
                      Ingredients you have: {props.recipe['usedIngredients'].map(r => (
                          <li>{r.original}</li>
                      ))
                      }
                      <br/>
                      Ingredients you need: {props.recipe['missedIngredients'].map(r => (
                          <li>{r.original}</li>
                        ))
                        }

                      </ul>
                    </div>
                  </div>
        </ul>

      


        </div>
    )
    }


export default RecipePage;

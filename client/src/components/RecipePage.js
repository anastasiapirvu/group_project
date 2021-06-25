import React, { useEffect, useState } from 'react';
import './RecipePage.css';


function RecipePage (props){


const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
 

  //props - recieve featured recipe

  let r = props.recipe

    async function pause(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }




    return (


       <div className="RecipePage">

      <ul className="col-sm-6 col-md-4 mb-3">      
                  <div className="card" style={{ backgroundColor: '#FEFFDE' }} className="text-center">
                  <h2>{r.title}</h2>
                  <img src={r.image}/><br/>
                    <div className="card-body" >
                      {/* <h5 className="card-title">{props.recipe.title}</h5> */}
                      <ul className="card-text">
                      {/* Ingredients you have: {props.recipe['usedIngredients'].map(r => (
                          <li>{r.original}</li>
                      ))
                      } */}
                      <br/>
                      Ingredients you need: {r['extendedIngredients'].map(r => (
                          <li>{r.original}</li>
                        ))
                        }

                      </ul>
                      <br />
                      Instructions:
                      <br />
                      {r.instructions !== null && r.instructions}
                      <br />
                      <a href={r.sourceUrl}>Link to original site</a>
                    </div>
                  </div>
        </ul>

      


        </div>
    )
    }



export default RecipePage;
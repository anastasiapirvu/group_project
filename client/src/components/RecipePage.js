import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './RecipePage.css';



function RecipePage (){
  //props - recieve ID of featured recipe
    async function pause(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function getRecipeMethod(id){
          setLoading(true);
          props.setFeatRecipeCb(null);
          setError("");
      
          let URL = `${baseURL}/${id}/information?includeNutrition=false&apiKey=${API_KEY}`
          console.log(URL)
          await pause(500);
      
          try{
            let response = await fetch(URL);
            console.log(response.json);
            if(response.ok) {
              let data = await response.json();
              props.setFeatRecipeCb(data);
            } else {
              setError(`Server Error: ${response.status} ${response.statusText}`)
            }
          } catch (err) {
            setError(`Network err: ${err.message}`);
          }
          setLoading(false)
        }

    return (
       

      <div>
        <Modal show={show} onHide={handleClick}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductDisplay recipes={recipes} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClick}>
            Open
          </Button>
          <Button variant="secondary" name="" onClick={handleClick}>
            Save as favourite
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
        )

    }        


export default RecipePage;
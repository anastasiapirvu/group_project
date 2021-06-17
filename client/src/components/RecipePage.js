import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './RecipePage.css';



function RecipePage (){


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
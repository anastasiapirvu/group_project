import React from 'react';

import IngredientSearch from './IngredientSearch'

import './App.css';
import APIfetch from './APIfetch.js'

function App() {
  return (
    <div className="App">
    <h2>I am Hungry</h2>

    <IngredientSearch/>





    <APIfetch />

    </div>
  );
}

export default App;

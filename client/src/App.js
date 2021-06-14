import React from 'react';

import IngredientSearch from './IngredientSearch'

import './App.css';
import APIfetch from './APIfetch.js'
import './App.css';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="App">
    <h2>I am Hungry</h2>

    <IngredientSearch/>





    <APIfetch />

    <ShoppingList />
    </div>
  );
}

export default App;

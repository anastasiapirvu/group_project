import React, { useState, useEffect } from "react";
import './ShoppingList.css';


function ShoppingList(props) {
  const [userId, setUserId] = useState(props.userId)
  const [list, setList] = useState([]);


  useEffect(() => {
    getItems(userId);
  }, [list]);

  async function getItems(userId){
    console.log('get items', userId)
    try{
      let response = await fetch(`/shoppingList/${userId}`);
      if (response.ok) {
        let items = await response.json();
        setList(items);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  }


    function handleChange(event) {
      let newId = event.target.value;
      setUserId(newId)
      getItems(newId);
      }
  
  return(

    <div className="ShoppingList">
    <h3>Delicious things I need...</h3>
    <h4>For testing purposes</h4>
    <select userId={userId} value={userId} onChange={handleChange}>
                <option>1</option>
                <option>2</option>
        </select>
    
    <div className = 'list'>
      <ul>
        {list.map(s =>(
        <li>{s.name}</li>
        )
        )}
      </ul>

      </div>
</div>

  )};
export default ShoppingList;


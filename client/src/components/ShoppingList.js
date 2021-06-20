import React, { useState, useEffect } from "react";
import './ShoppingList.css';




function ShoppingList() {
  const [userId, setUserId] = useState(1)
  const [list, setList] = useState([]);


  useEffect(() => {
    getItems();
  }, []);

  async function getItems(userId){
    try{
      let response = await fetch(`/${userId}`);
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
    <select userId={userId} value={userId} onChange={handleChange}>
                <option>1</option>
                <option>2</option>
        </select>
    
    <div className = 'list'>
      {list.map(s =>(
        <li>{s}</li>
      )
      )}

      </div>
</div>

  )};
export default ShoppingList;


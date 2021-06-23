import React, { useState, useEffect } from "react";
import './ShoppingList.css';


function ShoppingList(props) {
  const [userId, setUserId] = useState(props.userId)
  const [list, setList] = useState([]);


  useEffect(() => {
    getItems(userId);
  }, [userId]);

  async function getItems(userId){
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


  async function deleteItem(id){
    let options = { method: 'DELETE' };
    try {
      let response = await fetch(`/shoppingList/${id}`, options);
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

  function capitalise(string){
    let firstLetter = string.charAt(0).toUpperCase();
    let newString = string.slice(1);
    return firstLetter+newString;
  }

  function nonCapitalise(string){
    let firstLetter = string.charAt(0).toLowerCase();
    let newString = string.slice(1);
    return firstLetter+newString;
  }

    // function handleChange(event) {
    //   let newId = event.target.value;
    //   setUserId(newId)
    //   getItems(newId);
    //   }
  
  return(

    <div className="ShoppingList">
    <h3>Delicious things I need...</h3>
    {/* <h4>For testing purposes</h4> */}
    {/* <select userId={userId} value={userId} onChange={handleChange}>
      <option>1</option>
      <option>2</option>
    </select> */}
    
    <div className = 'list'>
      <table>
        <thead>
          <th>Item</th>
          <th>Quantity</th>
          <th>Got it?</th>
        </thead>
            {list.map(s =>(
            <tbody>
              <tr key = {s.id}>
                <td>{capitalise(s.name)} </td>
                <td>{s.quantity} {nonCapitalise(s.unit)} </td>
                <td><button className = 'gotDis' onClick = {(e => deleteItem(s.id))}>I already have this.</button></td>
              </tr>
            </tbody>
            )
            )}
          
      </table>

      </div>
</div>

  )};
export default ShoppingList;


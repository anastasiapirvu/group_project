import React, { useState } from 'react';
import './TopThree.css';



function TopThree(props){

  const [topThree, setTopThree] = useState([
    {
      title: "Apricot Glazed Apple Tart"
    },
    {
      title: "Apple Turnover"
    },
    {
    title: "Apple Donut"
    },
      ])

    return (
        <div className="TopThree">
          <h2>Your Top Three Suggestions</h2>
        {topThree.map(t =>(
          <li key ={t.title}>{t.title}</li>
        )
        )}

      </div>

      

        
            
        )

    }        


export default TopThree;
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);


  function increment() {
    setCount(count + 1);
    console.log(count);
  
  }
  const counterStyle = {
    color: "purple",
    fontSize: "240px", 
    cursor: "pointer",
    display: "flex",
    alignItems: 'center',
        justifyContent: 'center',
    
  
    };
  
  

  return <div style={counterStyle} onClick={increment}>{count}</div>;
}


export default Counter;

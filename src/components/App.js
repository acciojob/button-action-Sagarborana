import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  const [isClicked,setIsClicked] = useState(false);
  
  return (
    <div className="App" id="main">
      {/* // Do not alter the main div */}
    {isClicked &&
    (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)}
    <button id="click" onClick={()=>setIsClicked(true)}>Click Me</button>
    </div>
  );
}

export default App

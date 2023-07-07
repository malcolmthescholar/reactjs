import React, { Fragment } from "react";
import Navpath from "./Component/Navpath";
import Cards from "./Component/Cards";
import Heading from "./Component/Heading";


function App() {
  return (
    <>
      <div>
        <Navpath />
        <br />
        <Heading />
        <br />
        <br />
       
            <Cards />
          
            <Cards />
        
            <Cards />
         

        <br />
      </div>
    </>
  );
}

export default App;

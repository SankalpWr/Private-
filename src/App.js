
import "./App.css";

import { useDispatch } from "react-redux";
import { getData } from "./redux/Actions/card";
import { useSelector } from "react-redux";
import BoxFlex from "./components/BoxFlex";

import React, { useEffect } from "react";


function App() {
  const getComponent = () => (
    <div
      style={{
        
        backgroundColor: "#39495E",
        display: "static",
        height: "100%",
        width: "100%",

        alignItems: "center",
        justifyContent: "center",
      }}
    ></div>
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);



  
  const cardArray = useSelector((state) => state.cardReducer.card);

  return (
    <>
    
     
      <div className="App">
      
        {/* <FlexGrid
        layoutConfiguration={layoutConfiguration["lg"]}
        getComponent={getComponent}
      /> */}
       <div style = {{width:"100%",height:"100%",display:"flex",flexWrap:"wrap"}}>
      {
      cardArray.map((data)=>(
        <>
        <BoxFlex customerName = {data.customerName} customerNumber = {data.customerNumber} bucketNames = {data.bucketNames} pastDueBucketDocumentCount = {data.pastDueBucketDocumentCount}/>
        </>
      )
      )
      
    }
     {/* <BoxFlex1 /> */}
      </div>
     
      </div>
      
      <div className="App-Navbar">
       
      </div>
      {/* <BodyBox/> */}
    </>
  );

}

export default App;

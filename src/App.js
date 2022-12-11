import React, { useState } from "react";
import './App.css'
import Dictaphone from "./Components/Dictaphone";
import TextAreas from "./Components/TextAreas";

function App() {

  const [speech, setSpeech] = useState("");

  function handleAddText(trnsData) {
      setSpeech(trnsData);
  }

  return (
    <div>
      <div id="record">
        <Dictaphone 
          handleAddText = {handleAddText}
        />
      </div>
      <div>
        <TextAreas 
          spoken = {speech}
        />
      </div>
      
    </div>
  );
}

export default App;
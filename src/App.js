import React from 'react';
import './App.css';

import QuestionCard from "./QuestionCard"
import FallacyPresentation from "./FallacyPresentation"

/* eslint-disable */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Body">
          <h1 id="title">Fallacier</h1>
          <div className="centerCard">
            <h2>Choose a fallacy to start with:</h2>
            <div className="FallacyContainer">
              <FallacyPresentation name="Cherry Picking" />
              <QuestionCard name="Simpson's paradox" />
              {/* <QuestionCard name="Slippery Slope" /> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

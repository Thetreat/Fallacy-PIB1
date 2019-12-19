import React from 'react';
import './App.css';

class FallacyCard extends React.Component {
  render () {
    return (<div className="FallacyCard">
      <h3>
        {this.props.name}
      </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aliquam at commodo turpis. Mauris eu neque consectetur nunc mollis bibendum non ut mi. 
        Curabitur vitae dolor non orci auctor dapibus. Vestibulum imperdiet sodales hendrerit. 
        Proin hendrerit elit felis, sed maximus ipsum fermentum sit amet. 
        Aliquam et dolor pretium, malesuada sapien ut, pellentesque tellus. 
        Nam molestie congue mauris, et commodo elit pretium ut. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Sed facilisis imperdiet sapien vel viverra. Vestibulum lacinia pretium scelerisque. 
        Fusce nec urna mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aenean vitae nunc accumsan, vulputate urna nec, facilisis ex. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
      </p>
      <ul>
        <li>This is true</li>
        <li>This is false</li>
      </ul>
      <p><span style={{"textDecoration":"underline"}}>Difficulty</span> : 0.5</p>
    </div>)
  };
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Body">
          <h1>Fallacier</h1>
          <div className="centerCard">
            <h2>Choose a fallacy to start with:</h2>
            <div className="FallacyContainer">
              <FallacyCard name="Cherry Picking"/>
              <FallacyCard name="Simpson's paradox"/>
              <FallacyCard name="Slippery Slope"/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

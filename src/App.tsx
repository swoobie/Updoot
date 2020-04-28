import React from 'react';
import logo from './updoot_arrow.svg';
import './App.css';

const appName: string = "Updoot App";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>The {appName} is at your service!</h1>
          <h2>Though it's not able to do much now..</h2>
          <img src={logo} alt="" className="App-logo"/>
      </header>
    </div>
  );
}

export default App;

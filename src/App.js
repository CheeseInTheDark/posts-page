import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <div id="root">
        <div id="leftColumn"> 
        </div>
        <div class="centerDiv">
          <div id="loginBox">
            <p class="scriptTitle centered">Elizabeth Turns 16 <br />on May 26th, 2020!</p>
            <p>
              Thank you for joining the SUPER SECRET birthday card ( a bunch of posts from the people who love Elizabeth!). <br /> 
              <br />
              If you have forgotten your TOTALLY SECRET birthday card password, please text mom (Sandy) <br />
              at 614-537-3116.
              </p>
            <p>
              <label>Your Name</label><br /><input type="text" id="visitorName" />
            </p>
            <p>
              <label>Super Secret Birthday Car Password</label><br /><input type="text" id="secretPasscode" />
            </p>
            <button id="login">GO!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

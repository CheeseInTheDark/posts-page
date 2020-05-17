import React from 'react';
import logo from './logo.svg';
import './App.css'; 

function App() {
  return (
    <div className="App"> 
      <div id="root">
        <div id="leftColumn">
          some picture goes here
        </div>
        <div id="loginBox">
          <p>Elizabeth Turns 16 on May 26th, 2020!<br />
          Glad you are here! We have sent you a super secret Passcode to gain entry to Elizabeth's SUPER SECRET birthday card!  <br />If you have forgotten it, please text mom (Sandy) at 614-537-3116.</p>
          <p>
            <label>Your Name</label><br /><input type="text" id="visitorName" />
          </p>
          <p>
            <label>Super Secret Passcode</label><br /><input type="text" id="secretPasscode" />
          </p>
          <button id="login">GO!</button>
        </div>
      </div>  
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          /> 
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <title>Happy Happy 16th Birthday Elizabeth LIZZZZZIIIIIIIIIIE</title>
        </head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
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
            </div>
          </div> 
        </body>
      </html>
    </div>
  );
}

export default App;

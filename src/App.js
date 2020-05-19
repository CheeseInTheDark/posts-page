import React from 'react'
import './App.css'  
import './index.css'

function App() {
  return ( 
    <div className="App">
      <div id="root">
        <div id="leftColumn"> 
          <p className="scriptTitle centered">Elizabeth Turns 16 <br />on May 26th, 2020!</p>
          <p className="scriptTitle">Happy 16th</p>
          <img src="uploads/bee.png" width="100" />
          <p className="scriptTitle">Day Elizabeth!</p>
        </div>
        <div className="centerDiv">
          <div id="loginBox">
            <h1>Say Happy Birthday to Elizabeth!</h1>
            <p> 
              ( Add your message & photo to a bunch of posts from the people who love Elizabeth! ). 
              <br /><br /> 
              If you have forgotten your TOTALLY SECRET birthday card password, <br />
              please text mom (Sandy) at 614-537-3116.
              </p>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword">Password</label>
                <input type="text" className="form-control" id="inputPassword" placeholder="Super Secret Password" />
              </div>
            </div> 
            <button type="submit" className="btn btn-primary">Next</button> 
          </div>
        </div>
      </div>
    </div> 
  );
}

export default App;

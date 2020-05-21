import React, { useState } from 'react'

export default function Login({ login, loginFailed }) {  
    const [password, setPassword] = useState('')


    return <div className="container"> 
        <div className="column centered">
        <p className="scriptTitle centered">Elizabeth Turns 16 <br />on May 26th, 2020!</p>
        <p className="scriptTitle">Happy 16th</p>
        <img src="bee.png" width="100" />
        <p className="scriptTitle">Day Elizabeth!</p>
        </div>
        <div>
            <div>
                <h1>Say Happy Birthday to Elizabeth!</h1>
                <p>
                ( Add your message &amp; photo to a bunch of posts from the people who love Elizabeth! ).
                <br />
                </p>
                <div className="form-inline">
                 <label htmlFor="inputPassword" >Super Secret Password</label>
                 <input type="text" className="form-control" id="inputPassword" onChange={ event => setPassword(event.target.value) } placeholder="Placeholder" />
                 <button className="btn btn-secondary btn-block mt-4" id="login-button" onClick = { () => login(password) }>Next</button>
                </div>
                { loginFailed && <div id="login-failure-message">Oops! Did you use the right password? Text Sandy at 614-537-3116</div> }
            </div>
        </div>
    </div>
}
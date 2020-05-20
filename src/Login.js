import React, { useState } from 'react'

export default function Login({ login }) {

    const [password, setPassword] = useState('')

    return <div>
        <div id="leftColumn">
        <p className="scriptTitle centered">Elizabeth Turns 16 <br />on May 26th, 2020!</p>

        <p className="scriptTitle">Happy 16th</p>
        <img src="bee.png" width="100" />
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

                <div className="form-inline">
                    <div className="form-group">
                        <label htmlFor="inputPassword" >Super Secret Password</label>&nbsp;&nbsp;
                        <input type="text" className="form-control" id="inputPassword" onChange={ event => setPassword(event.target.value) } placeholder="Password" />
                    </div>
                    <button className="btn btn-secondary" id="login-button" onClick = { () => login(password) }>Next</button>
                </div>

            </div>
        </div>
    </div>
}
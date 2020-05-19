import React, { useState } from 'react'

export default function Login({ login }) {

    const [password, setPassword] = useState('')

    return <div>
        <div id="leftColumn"> 
        </div>
        <div className="centerDiv">
            <div id="loginBox">
                <p className="scriptTitle centered">
                    Elizabeth Turns 16 
                    <br />
                    on May 26th, 2020!
                </p>
                <p>
                    Thank you for joining the SUPER SECRET birthday card ( a bunch of posts from the people who love Elizabeth!). <br /> 
                    <br />
                    If you have forgotten your TOTALLY SECRET birthday card password, please text mom (Sandy) <br />
                    at 614-537-3116.
                </p>
                <p>
                    <label>Super Secret Birthday Card Password</label>
                    <br />
                    <input type="text" id="password" onChange={ event => setPassword(event.target.value) } />
                </p>
                <button id="login-button" onClick={() => login(password) }>GO!</button>
            </div>
        </div>
    </div>
}
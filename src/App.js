import React from 'react'
import './App.css'  

import './index.css'
import LoginConnector from './LoginConnector'
import PostsConnector from './PostsConnector'

function App({ route }) {
  return ( 
    <div className="container"> 
      { route == "login" ? <LoginConnector /> : <PostsConnector/> }
    </div>  
  )
}

export default App

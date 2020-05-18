import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import PostsConnector from './PostsConnector'
import store from './store'
import { Provider } from 'react-redux' 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <PostsConnector />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

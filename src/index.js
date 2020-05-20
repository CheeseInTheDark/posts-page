import React from 'react'
import ReactDOM from 'react-dom'
import AppConnector from './AppConnector'
import store from './store'
import { Provider } from 'react-redux' 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }> 
      <AppConnector /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

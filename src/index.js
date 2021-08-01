import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import MasterHook from 'master-hook'


ReactDOM.render(
  <MasterHook.Provider>
    <App />
  </MasterHook.Provider>,
  document.getElementById('root')
)
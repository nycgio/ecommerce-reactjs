import React from 'react'
import ReactDOM from 'react-dom'
import './bootstrap.min.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Axios from 'axios'

import { Provider } from 'react-redux'
import store from './store'

// set axios globals
Axios.defaults.baseURL = 'http://www.nycgio.com:5000'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()

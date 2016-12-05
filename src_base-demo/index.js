import './index.html';
//import './index.css';
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import todoApp from './reducers'

const rootEle = document.getElementById('app')
const store = createStore(todoApp)

render(
  <Provider store={store}>
  <App />
  </Provider>,
  rootEle
  )

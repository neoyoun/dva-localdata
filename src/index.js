import './index.html';
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
//import AsyncApp from './containers/AsyncApp'

render(<Root />,document.getElementById('root'))

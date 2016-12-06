import React,{ Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.handle1Click()}>alert1</button>
        <button onClick={()=>this.handle2Click()}>alert2</button>
      </div>
      )
  }
  handle1Click() {
    alert('1')
  }
  handle2Click() {
    alert('2')
  }
}
render(<App />,document.getElementById('root'))

import React,{ Component } from 'react'
export class App extends Component {
  handle1Click() {
    alert('1')
  }
  handle2Click() {
    alert('2')
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.handle1Click}>alert1</button>
        <button onClick={()=>this.handle2Click}>alert2</button>
      </div>
      )
  }
}

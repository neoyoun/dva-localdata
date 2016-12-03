import React,{ PropTypes,Component } from 'react'
import { findDOMNode } from 'react-dom'

export default class AddTodo extends Component {
  render(){
    return(
      <div>
        <input type="text" name="add" ref="input"/>
        <button onClick={ e => this.handleClick(e) }>
        Add</button>
      </div>
      )
  }
  handleClick(e) {
    const node = findDOMNode(this.refs.input)
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}

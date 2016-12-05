import React,{ Component,PropTypes } from 'react'

export default class Todo extends Component {
  render(){
    return(
        <li style={{ textDecoration:this.props.completed?'line-through' : 'none',cursor:this.props.completed?'default' : 'pointer'}} >
          {this.props.text}&nbsp;
         <button onClick={this.props.onClick}>completed</button>
         <button onClick={this.props.onReset}>reset</button>
        </li>
      )
  }
}
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}

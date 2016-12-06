import React,{Component,PropTypes} from 'react'
import { connect } from 'react-redux'
import { addTodo,completeTodo,resetTodo,setVisibilityFilter,VisibilityFilters} from '../actions'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class App extends Component{

  render(){
    const { dispatch, visibleTodos, visibilityFilter } = this.props
    return(
      <div>
      <AddTodo onAddClick={text => dispatch(addTodo(text))}/>
      <TodoList
      onTodoClick={index=> dispatch(completeTodo(index))}
      onResetTodo={index=> dispatch(resetTodo(index))}
      todos={visibleTodos} />
      <Footer filter={visibilityFilter}
      onFilterChange={nextFilter=> dispatch(setVisibilityFilter(nextFilter))} />
      </div>
      )
  }
}

App.propTypes = {
  visibleTodos:PropTypes.arrayOf(PropTypes.shape({
    text:PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired
  }).isRequired),
  visibilityFilter:PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
    ]).isRequired
}
function selectTodos(todos,filter) {
  switch(filter){
    case VisibilityFilters.SHOW_ALL:
    return todos
    case VisibilityFilters.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed)
  }
}

function select(state) {
  return {
    visibleTodos:selectTodos(state.todos,state.visibilityFilter),
    visibilityFilter:state.visibilityFilter
  }
}

export default connect(select)(App)

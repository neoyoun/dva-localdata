export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const RESET_TODO = 'RESET_TODO'
export const SET_VISIBILITY_FILTERS = 'SET_VISIBILITY_FILTERS'

export const VisibilityFilters = {
  SHOW_ALL:'SHOW_ALL',
  SHOW_COMPLETED:'SHOW_COMPLETED',
  SHOW_ACTIVE:'SHOW_ACTIVE'
}
export function addTodo(text) {
  return {type:ADD_TODO,text}
}
export function completeTodo(index) {
  return {type:COMPLETE_TODO,index}
}
export function resetTodo(index) {
  return {type:RESET_TODO,index}
}
export function setVisibilityFilter(filter){
  return {type:SET_VISIBILITY_FILTERS,filter}
}

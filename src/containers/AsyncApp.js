import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit,fetchPostsIfNeeded } from './actions'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,loggerMiddleware))

store.dispath(selectSubreddit('reactjs'))
//store.dispath(fetchPost('reactjs')).then(()=>console.log(store.getState()))

store.diapath(fetchPostsIfNeeded('reactjs')).then(()=>console.log(store.getState()))

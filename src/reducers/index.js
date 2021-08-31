import { combineReducers } from 'redux'
import ToDoListReducer from './ToDoListReducer'

const rootReducer = combineReducers({
  tasks: ToDoListReducer
})

export default rootReducer

import { combineReducers } from 'redux';
import ToDoListReducer from './ToDoListReducer';

const rootReducer = combineReducers({
  tasksState: ToDoListReducer,
});

export default rootReducer;

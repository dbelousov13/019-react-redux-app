import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [
    {
      id: Date.now(),
      task: 'Create Hometask',
      SLADate: '20/08/2021',
      isDone: false,
    },
  ],
};

const ToDoListReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.CREATE_TASK: {
      const { newTaskData } = action;
      const { tasks } = state;

      const newTask = {
        ...newTaskData,
        id: Date.now(),
        isDone: false,
      };

      const newTasks = [...tasks, newTask];
      return { tasks: newTasks };
    }
    default:
      return state;
  }
};

export default ToDoListReducer;

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
    case ACTION_TYPES.DELETE_TASK: {
      const { tasks } = state;
      const { id } = action;
      const newTasks = [...tasks];

      const index = newTasks.findIndex(t => id === t.id);
      newTasks.splice(index, 1);

      return { tasks: newTasks };
    }
    case ACTION_TYPES.UPDATE_IS_DONE_STATUS: {
      const { tasks } = state;
      const { newStatus: newTaskStatus } = action;
      const newTasks = [...tasks];
      const index = newTasks.findIndex(t => newTaskStatus.id === t.id);
      newTasks[index] = { ...newTasks[index], ...newTaskStatus };

      return { tasks: newTasks };
    }
    default:
      return state;
  }
};

export default ToDoListReducer;

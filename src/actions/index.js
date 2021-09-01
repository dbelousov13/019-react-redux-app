import ACTION_TYPES from './actionTypes';

export const createTask = newTaskData => {
  return {
    type: ACTION_TYPES.CREATE_TASK,
    newTaskData: newTaskData,
  };
};

export const deleteTask = id => {
  return {
    type: ACTION_TYPES.DELETE_TASK,
    id: id,
  };
};

export const updateIsDoneStatus = newStatus => {
  return {
    type: ACTION_TYPES.UPDATE_IS_DONE_STATUS,
    newStatus: newStatus,
  };
};

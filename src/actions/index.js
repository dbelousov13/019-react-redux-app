import ACTION_TYPES from './actionTypes'

export const createTask = newTaskData => {
  return {
    type: ACTION_TYPES.CREATE_TASK,
    newTaskData: newTaskData
  }
}

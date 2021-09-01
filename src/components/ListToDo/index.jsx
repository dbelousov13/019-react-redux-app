import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, updateIsDoneStatus } from '../../actions';
// import users from

function ListToDo (props) {
  const { tasks, deleteTaskAction, updateIsDoneStatusAction } = props;

  const mapTask = ({ id, task, SLADate, isDone }, index) => {
    const isDoneChangeHandler = () => {
      updateIsDoneStatusAction({ id: id, isDone: !isDone });
    };

    const deleteTask = () => {
      deleteTaskAction(id);
    };

    return (
      <li key={id}>
        {task}, Due to: {SLADate}
        <input
          type='checkbox'
          checked={isDone}
          onChange={isDoneChangeHandler}
        />
        <button onClick={deleteTask}>Delete task</button>
      </li>
    );
  };
  return <ul>{tasks.map(mapTask)}</ul>;
}

const mapStateToProps = state => state.tasksState;

const mapDispatchToProps = dispatch => {
  return {
    deleteTaskAction: id => {
      dispatch(deleteTask(id));
    },
    updateIsDoneStatusAction: newTaskStatus => {
      dispatch(updateIsDoneStatus(newTaskStatus));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListToDo);

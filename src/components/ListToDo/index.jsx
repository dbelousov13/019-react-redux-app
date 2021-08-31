import React from 'react';
import { connect } from 'react-redux';
// import users from

function ListToDo (props) {
  const { tasks } = props;

  const mapTask = ({ id, task, SLADate, isDone }, index) => {
    const isDoneChangeHandler = () => {};

    const deleteTask = () => {};

    return (
      <li key={id}>
        ID:{id}, Task: {task}, Due to: {SLADate}
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

const mapStateToProps = state => state.taskState;

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(ListToDo);

import React from 'react';
import InputToDoForm from '../../components/InputToDoForm';
import ListToDo from '../../components/ListToDo';
import styles from '../MainToDoList/MainToDo.modules.scss';

function MainToDoList () {
  return (
    <div className={styles.mainDiv}>
      <InputToDoForm />
      <ListToDo />
    </div>
  );
}

export default MainToDoList;

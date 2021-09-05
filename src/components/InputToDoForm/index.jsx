import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createTask } from '../../actions';
import styles from '../InputToDoForm/InputToDo.module.scss';

function InputToDoForm (props) {
  const { createTaskAction } = props;

  const initialToDoValues = {
    task: '',
    SLADate: '',
    isDone: false,
  };

  const submitHandler = (values, formikBag) => {
    createTaskAction(values);
    formikBag.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialToDoValues} onSubmit={submitHandler}>
        {formikProps => {
          return (
            <Form>
              <Field name='task' />
              <Field type='date' name='SLADate' />
              {/* <Field type='checkbox' name='isDone' /> */}
              <button type='submit'>Add task</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

const mapDispatchToProsp = dispatch => {
  return {
    createTaskAction: data => {
      dispatch(createTask(data));
    },
  };
};

export default connect(null, mapDispatchToProsp)(InputToDoForm);

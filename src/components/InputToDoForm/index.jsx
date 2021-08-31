import React from 'react'
import { Formik, Form, Field } from 'formik'
import { connect } from 'react-redux'
import { createTask } from '../../actions'

function InputToDoForm (props) {
  const { createTaskAction } = props

  const initialToDoValues = {
    task: '',
    SLADate: '',
    isDone: false
  }

  const submitHandler = (values, formikBag) => {
    createTaskAction(values)
    formikBag.resetForm()
  }

  return (
    <Formik initialValues={initialToDoValues} onSubmit={submitHandler}>
      {formikProps => {
        return (
          <Form>
            <Field name='task' />
            <Field name='SLADate' />
            <Field type='checkbox' name='isDone' />
            <button type='submit'>Add task</button>
          </Form>
        )
      }}
    </Formik>
  )
}

const mapDispatchToProsp = dispatch => {
  return {
    createTaskAction: data => {
      dispatch(createTask(data))
    }
  }
}

export default connect(null, mapDispatchToProsp)(InputToDoForm)

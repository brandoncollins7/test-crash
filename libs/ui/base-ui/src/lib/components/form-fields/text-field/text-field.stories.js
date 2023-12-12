import React from 'react'
import {Field, Form, Formik} from 'formik'
import {TextField} from './text-field'

export default {
  component: TextField,
  title: 'components/form-fields/text-field',
  tags: ['autodocs']
}

const TextFieldTemplate = (props) => <Field component={TextField} {...props} />

const TextFieldsTemplate = (props) => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false)
      }}>
      {() => (
        <Form>
          <div>
            <TextFieldTemplate label="Text Type" name="text" {...props} />
          </div>
          <div>
            <TextFieldTemplate label="Text Type with Helper Text" name="text_type_with_helper_text" helperText="This is the helper text" {...props} />
          </div>
          <div>
            <TextFieldTemplate label="Text Type With Error" name="text_type_with_error" meta={{error: 'This is the error text'}} {...props} />
          </div>
          <div>
            <TextFieldTemplate label="Disabled Text Type" name="disabled" disabled {...props} />
          </div>
          <div>
            <TextFieldTemplate label="Read Only Text Type" name="read_only" readOnly {...props} />
          </div>
          <div>
            <TextFieldTemplate label="Decimal Type" name="decimal" type="decimal" {...props} />
          </div>
          <div>
            <TextFieldTemplate label="Textarea" name="textarea" textarea textareaOptions={{rows: 4}} {...props} />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export const BasicTextFields = () => <TextFieldsTemplate />

export const PrimaryTextFields = () => <TextFieldsTemplate theme={['primaryBg', 'onPrimary']} />

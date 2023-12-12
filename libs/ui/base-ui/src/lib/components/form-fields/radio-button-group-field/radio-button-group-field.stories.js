import React from 'react'
import {Field, Form, Formik} from 'formik'
import {RadioButtonGroupField} from './radio-button-group-field'

export default {
  component: RadioButtonGroupField,
  title: 'components/form-fields/radio-button-group-field',
  tags: ['autodocs']
}

const options = [
  {label: 'Cookies', value: 'cookies'},
  {label: 'Pizza', value: 'pizza'},
  {label: 'Icecream Sundae', value: 'icecream sundae'}
]

const RadioButtonGroupFieldTemplate = (args) => (
  <Formik
    initialValues={{}}
    onSubmit={(values, actions) => {
      actions.setSubmitting(false)
    }}>
    {() => (
      <Form>
        <Field component={RadioButtonGroupField} {...args} />
      </Form>
    )}
  </Formik>
)

export const BasicRadioButtonGroupFields = RadioButtonGroupFieldTemplate.bind({})
BasicRadioButtonGroupFields.args = {
  id: 'basic',
  name: 'basic',
  label: 'Default',
  options
}

export const PrimaryRadioButtonGroupFields = RadioButtonGroupFieldTemplate.bind({})
PrimaryRadioButtonGroupFields.args = {
  id: 'primary',
  name: 'primary',
  label: 'Primary',
  options,
  theme: ['primaryBg', 'onPrimary']
}

export const WithHelperText = RadioButtonGroupFieldTemplate.bind({})
WithHelperText.args = {
  id: 'with-helper-text',
  name: 'with_helper_text',
  label: 'With Helper Text',
  options,
  helperText: 'This is the helper text'
}

export const WithError = RadioButtonGroupFieldTemplate.bind({})
WithError.args = {
  id: 'with-error',
  name: 'with_error',
  label: 'With Error',
  options,
  meta: {error: 'This is the error text'}
}

export const Disabled = RadioButtonGroupFieldTemplate.bind({})
Disabled.args = {
  id: 'disabled',
  name: 'disabled',
  label: 'Disabled',
  options,
  disabled: true
}

export const ReadOnly = RadioButtonGroupFieldTemplate.bind({})
ReadOnly.args = {
  id: 'readonly',
  name: 'readonly',
  label: 'Read Only',
  options,
  readOnly: true
}

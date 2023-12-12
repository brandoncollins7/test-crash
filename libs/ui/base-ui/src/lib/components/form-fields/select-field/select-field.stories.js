import React from 'react'
import {Field, Form, Formik} from 'formik'
import {SelectField} from './select-field'

export default {
  component: SelectField,
  title: 'components/form-fields/select-field',
  tags: ['autodocs']
}

const SelectFieldTemplate = (props) => (
  <Formik
    initialValues={{}}
    onSubmit={(values, actions) => {
      actions.setSubmitting(false)
    }}>
    {() => (
      <Form>
        <Field component={SelectField} {...props} />
      </Form>
    )}
  </Formik>
)

export const BasicSelectFields = () => (
  <SelectFieldTemplate
    label="Default"
    name="default"
    options={[
      {label: 'Cookies', value: 'cookies'},
      {label: 'Pizza', value: 'pizza'},
      {label: 'Icecream Sundae', value: 'icecream sundae'}
    ]}
  />
)

export const PrimarySelectFields = () => (
  <SelectFieldTemplate
    theme={['primaryBg', 'onPrimary']}
    label="Primary"
    name="primary"
    options={[
      {label: 'Cookies', value: 'cookies'},
      {label: 'Pizza', value: 'pizza'},
      {label: 'Icecream Sundae', value: 'icecream sundae'}
    ]}
  />
)

export const SelectFieldWithHelperText = () => (
  <SelectFieldTemplate
    label="With Helper Text"
    name="with_helper_text"
    options={[
      {label: 'Cookies', value: 'cookies'},
      {label: 'Pizza', value: 'pizza'},
      {label: 'Icecream Sundae', value: 'icecream sundae'}
    ]}
    helperText="This is the helper text"
  />
)

export const SelectFieldWithError = () => (
  <SelectFieldTemplate
    label="With Error"
    name="with_error"
    options={[
      {label: 'Cookies', value: 'cookies'},
      {label: 'Pizza', value: 'pizza'},
      {label: 'Icecream Sundae', value: 'icecream sundae'}
    ]}
    meta={{error: 'This is the error text'}}
  />
)

export const DisabledSelectField = () => (
  <SelectFieldTemplate
    label="Disabled"
    name="disabled"
    options={[
      {label: 'Cookies', value: 'cookies'},
      {label: 'Pizza', value: 'pizza'},
      {label: 'Icecream Sundae', value: 'icecream sundae'}
    ]}
    disabled
  />
)

export const ReadOnlySelectField = () => (
  <SelectFieldTemplate
    label="Read Only"
    name="read_only"
    options={[
      {label: 'Cookies', value: 'cookies'},
      {label: 'Pizza', value: 'pizza'},
      {label: 'Icecream Sundae', value: 'icecream sundae'}
    ]}
    readOnly
  />
)

export const DenseSelectField = () => (
  <SelectFieldTemplate
    label="Dense"
    name="dense"
    options={[
      {label: 'Cookies', value: 'cookies'},
      {label: 'Pizza', value: 'pizza'},
      {label: 'Icecream Sundae', value: 'icecream sundae'}
    ]}
    dense
  />
)

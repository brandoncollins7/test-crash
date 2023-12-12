import React from 'react'
import {Field, Form, Formik} from 'formik'
import {RadioGroupField} from './radio-group-field'

export default {
  component: RadioGroupField,
  title: 'components/form-fields/radio-group-field',
  tags: ['autodocs']
}

const options = [
  {label: 'Cookies', value: 'cookies'},
  {label: 'Pizza', value: 'pizza'},
  {label: 'Icecream Sundae', value: 'icecream sundae'}
]

const RadioGroupFieldTemplate = (props) => <Field component={RadioGroupField} {...props} />

export const BasicRadioGroupFields = () => (
  <Formik
    initialValues={{}}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit={() => {}}>
    <Form>
      <RadioGroupFieldTemplate label="Default" id="basic-default" name="default" options={options} />
    </Form>
  </Formik>
)

export const Primary2RadioGroupFields = () => (
  <Formik
    initialValues={{}}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit={() => {}}>
    <Form>
      <RadioGroupFieldTemplate
        label="Default"
        id="primary2-default"
        name="default"
        options={options}
        theme={['onPrimary2']}
        containerStyle={{backgroundColor: 'var(--mdc-theme-primary2)'}}
      />
    </Form>
  </Formik>
)

export const WithHelperText = () => (
  <Formik
    initialValues={{}}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit={() => {}}>
    <Form>
      <RadioGroupFieldTemplate label="Default with Helper Text" id="helperText-default" name="default_with_helper_text" options={options} helperText="This is the helper text" />
    </Form>
  </Formik>
)

export const WithError = () => (
  <Formik
    initialValues={{}}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit={() => {}}>
    <Form>
      <RadioGroupFieldTemplate label="Default with Error" id="error-default" name="default_with_error" options={options} meta={{error: 'This is the error text'}} />
    </Form>
  </Formik>
)

export const Disabled = () => (
  <Formik
    initialValues={{}}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit={() => {}}>
    <Form>
      <RadioGroupFieldTemplate label="Disabled" id="disabled-default" name="disabled" options={options} disabled />
    </Form>
  </Formik>
)

export const ReadOnly = () => (
  <Formik
    initialValues={{}}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit={() => {}}>
    <Form>
      <RadioGroupFieldTemplate label="Read Only" id="readonly-default" name="readonly" options={options} readOnly />
    </Form>
  </Formik>
)

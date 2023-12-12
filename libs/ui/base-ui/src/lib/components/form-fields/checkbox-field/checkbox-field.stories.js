import React from 'react'
import {Field, Form, Formik} from 'formik'
import {CheckboxField} from './checkbox-field'
import PropTypes from 'prop-types'
export default {
  component: CheckboxField,
  title: 'components/form-fields/checkbox-field',
  tags: ['autodocs']
}

const CheckboxFieldTemplate = (props) => <Field component={CheckboxField} {...props} />

const CheckboxFieldsTemplate = ({containerStyle, ...otherProps}) => {
  return (
    <div style={containerStyle}>
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false)
        }}>
        {() => (
          <Form>
            <div>
              <CheckboxFieldTemplate label="Default" name="default" {...otherProps} />
            </div>
            <div>
              <CheckboxFieldTemplate label="Default with Helper Text" name="default_with_helper_text" helperText="This is the helper text" {...otherProps} />
            </div>
            <div>
              <CheckboxFieldTemplate label="Default With Error" name="default_with_error" meta={{error: 'This is the error text'}} {...otherProps} />
            </div>
            <div>
              <CheckboxFieldTemplate label="Disabled" name="disabled" disabled {...otherProps} />
            </div>
            <div>
              <CheckboxFieldTemplate label="Read Only" name="read_only" readOnly {...otherProps} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

CheckboxFieldsTemplate.propTypes = {
  containerStyle: PropTypes.object,
  ...CheckboxField.propTypes
}

export const BasicCheckboxFields = () => <CheckboxFieldsTemplate />

export const Primary2CheckboxFields = () => <CheckboxFieldsTemplate theme={['onPrimary2']} containerStyle={{backgroundColor: 'var(--mdc-theme-primary2)'}} />

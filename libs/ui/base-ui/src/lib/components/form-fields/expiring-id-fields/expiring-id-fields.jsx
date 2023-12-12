import {IdFields} from '@frnt/base'
import React from 'react'
import {TextField} from '@frnt/base'
import {Field} from 'formik'
import {FileField} from '@frnt/base'
import {fileFieldPropTypes} from '@frnt/base/components/form-fields/file-field/file-field'
import {idFieldsPropTypes} from '../id-fields/id-fields'
import PropTypes from 'prop-types'
// TODO Adnan: Write docs,tests and compose this component
export const ExpiringIdFields = ({name, handleBlur, form, ...otherProps}) => {
  return (
    <>
      <IdFields name={name} {...otherProps} />
      <Field
        name={`${name}.expiry`}
        label="Expiry"
        component={TextField}
        type="date"
        theme={'neutral'}
        onBlur={(e) => {
          form.setFieldTouched(`${name}.expiry`, true)
          // Hack to wait for new value to be applied
          // Pending https://github.com/jaredpalmer/formik/issues/529
          // executed after the JavaScript runtime has finished processing any tasks already queued in the event loop.
          // we can't run the handleBlur in the onBlur handler because it'll submit the form's right away with older values
          setTimeout(() => {
            handleBlur(e)
          }, 0)
        }}
      />
    </>
  )
}

ExpiringIdFields.propTypes = {
  name: PropTypes.string.isRequired,
  handleBlur: PropTypes.func,
  form: PropTypes.object,
  ...idFieldsPropTypes
}

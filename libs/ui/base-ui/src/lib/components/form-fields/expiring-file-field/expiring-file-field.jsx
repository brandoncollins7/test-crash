import {FileField} from '../file-field'
import React from 'react'
import {Field} from 'formik'
import {TextField} from '../text-field'
// TODO Adnan: Write docs,tests and compose this component
export const ExpiringFileField = ({name, form, handleBlur, ...props}) => {
  return (
    <>
      <Field component={FileField} {...props} />
      <Field
        name={`${props.name}.expiry`}
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

ExpiringFileField.propTypes = {
  ...FileField.propTypes
}

import React from 'react'
import {CheckboxField} from '../checkbox-field'
import PropTypes from 'prop-types'
import {getIn} from 'formik'
import {StyledTextFieldHelperText} from '../text-field-helper-text'

export const CheckboxGroupField = ({
  field,
  options,
  form,
  helperText,
  handleBlur,
  ...otherProps
}) => {
  const {name, value: formikValue} = field
  const error = getIn(form.touched, name) ? getIn(form.errors, name) : null

  const {setFieldValue} = form
  const isSingleBooleanOption = options.length === 1 && typeof options[0].value === 'boolean'

  const handleChange = async (e, value) => {
    let newValue

    if (isSingleBooleanOption) {
      newValue = e.target.checked
    } else {
      newValue = formikValue ? [...formikValue] : []
      const index = newValue.indexOf(value)
      e.target.checked ? newValue.push(value) : newValue.splice(index, 1)
      if (!newValue.length) newValue = undefined
    }

    setFieldValue(name, newValue)
    form.setFieldTouched(name, true)
    // Hack to wait for new value to be applied
    // Pending https://github.com/jaredpalmer/formik/issues/529
    // executed after the JavaScript runtime has finished processing any tasks already queued in the event loop.
    // we can't run the handleBlur in the onBlur handler because it'll submit the form's right away with older values
    setTimeout(() => {
      handleBlur()
    }, 0)
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {options?.map(({value, label}, index) => (
        <CheckboxField
          key={index}
          name={name}
          field={{name}}
          form={{errors: {}, setFieldValue: () => {}, setFieldTouched: () => {}, touched: {}}}
          label={label}
          handleBlur={() => {}}
          checked={isSingleBooleanOption ? !!formikValue : formikValue?.includes(value)}
          value={isSingleBooleanOption ? options[0].value : field.value}
          onChange={(e) => handleChange(e, value)}
          {...otherProps}
        />
      ))}
      {error && (
        <StyledTextFieldHelperText persistent validationMsg>
          {error}
        </StyledTextFieldHelperText>
      )}
      {!error && helperText && (
        <StyledTextFieldHelperText persistent>{helperText}</StyledTextFieldHelperText>
      )}
    </div>
  )
}

CheckboxGroupField.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  index: PropTypes.number,
  value: PropTypes.string,
  form: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  theme: PropTypes.array,
  label: PropTypes.string,
  field: PropTypes.object,
  helperText: PropTypes.string
}

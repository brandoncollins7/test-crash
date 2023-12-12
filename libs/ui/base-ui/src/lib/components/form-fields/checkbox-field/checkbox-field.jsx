import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {StyledTextFieldHelperText} from '../text-field-helper-text'
import {Checkbox} from '@rmwc/checkbox'
import {getIn} from 'formik'
import '@rmwc/checkbox/styles'

const theme = ({theme}) => css`
  &&&.mdc-theme--on-${theme}
    .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)
    ~ .mdc-checkbox__background {
    border-color: var(--mdc-theme-on-${theme});
  }
  &&&.mdc-theme--on-${theme}
    .mdc-checkbox__native-control:enabled:checked
    ~ .mdc-checkbox__background,
  &&&.mdc-theme--on-${theme}
    .mdc-checkbox__native-control:enabled:indeterminate
    ~ .mdc-checkbox__background {
    border-color: var(--mdc-theme-on-${theme});
    background-color: var(--mdc-theme-on-${theme});
  }
  &&&.mdc-theme--on-${theme}
    .mdc-checkbox__native-control:enabled
    ~ .mdc-checkbox__background
    .mdc-checkbox__checkmark {
    color: var(--mdc-theme-${theme});
  }
  &&&.mdc-form-field.mdc-theme--on-${theme} > label {
    color: var(--mdc-theme-on-${theme});
  }
  ${(props) =>
    props.readOnly &&
    `
    &&&.mdc-theme--on-${theme} .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background {
      border-color: var(--mdc-theme-on-${theme});
    }
  `}
`

export const StyledCheckbox = styled(Checkbox)`
  &&& {
    width: 100%;
  }
  &&& .mdc-checkbox {
    padding: 12px;
  }
  &&& > label {
    cursor: pointer;
  }
  &&&.mdc-form-field {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
  &&& .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
  &&& .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
    border-color: var(--mdc-theme-primary2);
    background-color: var(--mdc-theme-primary2);
  }

  ${(props) =>
    props.disabled &&
    `
    &&&.mdc-form-field > label {
      color: var(--mdc-theme-neutral4);
    }
    &&& .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background {
      border-color: var(--mdc-theme-neutral4);
    }
  `}
  ${(props) =>
    props.readOnly &&
    `
    &&&.mdc-form-field > label {
      color: initial;
    }
    &&& .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background {
      border-color: initial;
    }
  `}
  ${theme({theme: 'primary2'})};
`

const StyledStyledTextFieldHelperText = styled(StyledTextFieldHelperText)`
  &&& {
    padding-left: 44px;
  }
`

const CheckboxField = ({
  field: {name, value},
  form,
  meta,
  label,
  helperText,
  disabled,
  readOnly,
  normalize,
  defaultChecked,
  handleChange,
  handleBlur,
  theme,
  ...otherProps
}) => {
  useEffect(() => {
    if (!(value === null || value === undefined)) {
      const normalizedValue = normalize(value)
      form.setFieldValue(name, normalizedValue)
    } else if ((value === null || value === undefined) && defaultChecked) {
      form.setFieldValue(name, true)
    }
  }, [value, defaultChecked])

  const error = getIn(form.touched, name) ? getIn(form.errors, name) : null

  function camelToKebabCase(str) {
    return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
  }

  return (
    <div>
      <StyledCheckbox
        checked={value === true}
        onChange={(e) => {
          const normalizedValue = normalize(e.target.checked)
          form.setFieldValue(name, normalizedValue)
          handleChange(normalizedValue, name, form)
        }}
        onBlur={(e) => {
          form.setFieldTouched(name, true)
          // Hack to wait for new value to be applied
          // Pending https://github.com/jaredpalmer/formik/issues/529
          // executed after the JavaScript runtime has finished processing any tasks already queued in the event loop.
          setTimeout(() => {
            handleBlur()
          }, 0)
        }}
        disabled={disabled}
        readOnly={readOnly}
        className={
          theme && theme.length
            ? theme.reduce((result, t) => `${result} mdc-theme--${camelToKebabCase(t)}`, '')
            : undefined
        } // TODO stevo: figure out why Radio component w/ theme prop doesn't add theme class names and then remove this
        {...otherProps}>
        {label}
      </StyledCheckbox>
      {error && (
        <StyledStyledTextFieldHelperText persistent validationMsg>
          {error}
        </StyledStyledTextFieldHelperText>
      )}
      {!error && (
        <StyledStyledTextFieldHelperText persistent>{helperText}</StyledStyledTextFieldHelperText>
      )}
    </div>
  )
}

CheckboxField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired
  }).isRequired,
  meta: PropTypes.object,
  label: PropTypes.string,
  helperText: PropTypes.node,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  normalize: PropTypes.func,
  defaultChecked: PropTypes.bool,
  theme: PropTypes.array
}

CheckboxField.defaultProps = {
  disabled: false,
  readOnly: false,
  handleChange: () => {},
  handleBlur: () => {},
  normalize: (value) => value
}

export {CheckboxField}

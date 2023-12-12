import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {Radio} from '@rmwc/radio'
import {StyledTextFieldHelperText} from '../text-field-helper-text'
import '@rmwc/radio/styles'
import {getIn} from 'formik'

const theme = ({theme}) => css`
  &&&.mdc-radio.mdc-theme--on-${theme}
    .mdc-radio__native-control:enabled:not(:checked)
    + .mdc-radio__background
    .mdc-radio__outer-circle {
    border-color: var(--mdc-theme-on-${theme});
  }
  &&&.mdc-radio.mdc-theme--on-${theme}
    .mdc-radio__native-control:enabled:checked
    + .mdc-radio__background
    .mdc-radio__outer-circle {
    border-color: var(--mdc-theme-on-${theme});
  }
  &&&.mdc-radio.mdc-theme--on-${theme}
    .mdc-radio__native-control:enabled
    + .mdc-radio__background
    .mdc-radio__inner-circle {
    border-color: var(--mdc-theme-on-${theme});
  }

  ${(props) =>
    props.readOnly &&
    `
    &&&.mdc-theme--on-${theme}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle,
    &&&.mdc-theme--on-${theme}.mdc-radio .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background .mdc-radio__outer-circle {
      border-color: var(--mdc-theme-on-${theme});
    }
  `}
`

const labelTheme = ({theme}) => css`
  &&&.mdc-theme--on-${theme} {
    color: var(--mdc-theme-on-${theme});
  }
`

const StyledLabel = styled.label`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  ${(props) =>
    props.disabled &&
    `
    color: var(--mdc-theme-neutral4);
  `}
  ${labelTheme({theme: 'primary2'})};
`

const StyledRadio = styled(Radio)`
  &&&.mdc-radio
    .mdc-radio__native-control:enabled:checked
    + .mdc-radio__background
    .mdc-radio__outer-circle {
    border-color: var(--mdc-theme-primary2);
  }
  &&&.mdc-radio
    .mdc-radio__native-control:enabled
    + .mdc-radio__background
    .mdc-radio__inner-circle {
    border-color: var(--mdc-theme-primary2);
  }
  ${theme({theme: 'primary2'})};
`

const RadioGroupField = ({
  id,
  field: {name, value},
  form,
  meta,
  label,
  options,
  helperText,
  disabled,
  readOnly,
  handleChange,
  handleBlur,
  normalize,
  theme,
  ...otherProps
}) => {
  const error = getIn(form.touched, name) ? getIn(form.errors, name) : null

  function camelToKebabCase(str) {
    return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
  }

  return (
    <>
      {label && (
        <StyledLabel
          disabled={disabled}
          readOnly={readOnly}
          className={
            theme && theme.length
              ? theme.reduce((result, t) => `${result} mdc-theme--${camelToKebabCase(t)}`, '')
              : undefined
          }>
          {label}
        </StyledLabel>
      )}
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {options?.map((option, index) => (
          <StyledRadio
            key={index}
            name={name}
            id={`${id}--${option.value}`}
            label={option.label}
            checked={String(value) === option.value}
            value={option.value || ''}
            onChange={(e) => {
              const val = e.target.value === '' ? null : e.target.value
              const normalizedValue = normalize(val)
              form.setFieldValue(name, normalizedValue)
              handleChange(normalizedValue, name, form)
              form.setFieldTouched(name, true)
              // Hack to wait for new value to be applied
              // Pending https://github.com/jaredpalmer/formik/issues/529
              // executed after the JavaScript runtime has finished processing any tasks already queued in the event loop.
              // we can't run the handleBlur in the onBlur handler because it'll submit the form's right away with older values
              setTimeout(() => {
                handleBlur()
              }, 0)
            }}
            disabled={disabled}
            onBlur={() => {}}
            readOnly={readOnly}
            className={
              theme && theme.length
                ? theme.reduce((result, t) => `${result} mdc-theme--${camelToKebabCase(t)}`, '')
                : undefined
            } // TODO stevo: figure out why Radio component w/ theme prop doesn't add theme class names and then remove this
            {...otherProps}
          />
        ))}
      </div>
      {error && (
        <StyledTextFieldHelperText persistent validationMsg>
          {error}
        </StyledTextFieldHelperText>
      )}
      {!error && <StyledTextFieldHelperText persistent>{helperText}</StyledTextFieldHelperText>}
    </>
  )
}

RadioGroupField.propTypes = {
  id: PropTypes.string,
  field: PropTypes.object.isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
    touched: PropTypes.object.isRequired
  }).isRequired,
  meta: PropTypes.object,
  label: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  normalize: PropTypes.func,
  theme: PropTypes.array
}

RadioGroupField.defaultProps = {
  disabled: false,
  readOnly: false,
  handleChange: () => {},
  handleBlur: () => {},
  normalize: (value) => value
}

export {RadioGroupField}

import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {StyledTextFieldHelperText} from '../text-field-helper-text'
import {Radio} from '@rmwc/radio'
import '@rmwc/radio/styles'
import {getIn} from 'formik'

const theme = ({theme}) => css`
  &&&.mdc-theme--on-${theme} {
    color: var(--mdc-theme-neutral4);
  }
  &&&.mdc-theme--${theme}-bg .mdc-radio__background {
    border-color: var(--mdc-theme-secondary4);
  }
  &&&.mdc-theme--${theme}-bg .mdc-radio__outer-circle {
    background-color: var(--mdc-theme-primary);
  }
  &&&.mdc-theme--${theme}-bg .mdc-radio__inner-circle {
    background-color: rgba(var(--mdc-theme-secondary4-rgb), 0.3);
  }
  ${(props) =>
    props.checked &&
    `
    &&&.mdc-theme--on-${theme} > label {
      color: var(--mdc-theme-on-primary);
    }
  `}
`

const StyledRadio = styled(Radio)`
  &&& {
    width: 100%;
    position: relative;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.6);
  }
  &&& .mdc-radio {
    width: inherit;
    min-width: 64px;
    height: 32px;
    padding: 0;
    overflow: hidden;
  }
  &&& .mdc-radio__background {
    width: inherit;
    min-width: 64px;
    height: 32px;
    left: 0;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.38);
  }
  ${(props) =>
    props.checked &&
    `
    &&& .mdc-radio__background {
      border-color: var(--mdc-theme-primary2);
    }
  `}
  &&&:first-child .mdc-radio__background {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &&&:last-child .mdc-radio__background {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &&&:not(:last-child) .mdc-radio__background {
    border-right-width: 0;
  }
  &&& .mdc-radio__outer-circle {
    border-width: 0;
    border-radius: initial;
    background-color: inherit;
  }
  &&&:first-child .mdc-radio__outer-circle {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &&&:last-child .mdc-radio__outer-circle {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &&& .mdc-radio__inner-circle {
    border-width: 0;
    border-radius: initial;
    background-color: rgba(var(--mdc-theme-primary2-rgb), 0.2);
  }
  &&&:first-child .mdc-radio__inner-circle {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &&&:last-child .mdc-radio__inner-circle {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &&& .mdc-radio .mdc-radio__native-control {
    width: 100%;
    height: 100%;
  }
  &&&
    .mdc-radio
    .mdc-radio__native-control:checked
    + .mdc-radio__background
    .mdc-radio__inner-circle {
    transform: scale(1);
  }
  &&& > label {
    padding-left: 0;
    position: absolute;
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  ${(props) =>
    props.checked &&
    `
    &&& > label {
      color: var(--mdc-theme-primary2);
    }
  `}
  &&& .mdc-radio[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,
  &&& .mdc-radio[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after {
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
  }
  ${theme({theme: 'primary'})};
`

const RadioButtonGroupField = ({
  id,
  field: {name, value},
  form,
  meta,
  label,
  options,
  helperText,
  handleChange,
  normalize,
  theme,
  validateOnChange,
  ...otherProps
}) => {
  const error = getIn(form.touched, name) ? getIn(form.errors, name) : null

  function camelToKebabCase(str) {
    return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
  }

  return (
    <div>
      {label && <label>{label}</label>}
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
              const normalizedValue = normalize(e.target.value)
              form.setFieldValue(name, normalizedValue, validateOnChange)
              handleChange(normalizedValue, name, form)
            }}
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
    </div>
  )
}

RadioButtonGroupField.propTypes = {
  id: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  label: PropTypes.string,
  form: PropTypes.shape({
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func.isRequired
  }).isRequired,
  meta: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.object,
  handleChange: PropTypes.func,
  normalize: PropTypes.func,
  helperText: PropTypes.string,
  theme: PropTypes.array,
  validateOnChange: PropTypes.bool
}

RadioButtonGroupField.defaultProps = {
  handleChange: () => {},
  normalize: (value) => value,
  validateOnChange: true
}

export {RadioButtonGroupField}

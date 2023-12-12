import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import {TextField as RmwcTextField} from '@rmwc/textfield'
import '@rmwc/textfield/styles'
import {getIn} from 'formik'

const theme = ({theme}) => css`
  &&&.mdc-text-field.mdc-theme--${theme}-bg:not(.mdc-text-field--disabled) {
    background-color: var(--mdc-theme-${theme});
  }
  &&&.mdc-theme--on-${theme} .mdc-text-field__input {
    caret-color: var(--mdc-theme-on-${theme});
  }
  &&&.mdc-theme--on-${theme}:not(.mdc-text-field--disabled) .mdc-text-field__input {
    color: var(--mdc-theme-on-${theme});
  }
  &&&.mdc-theme--on-${theme}.mdc-text-field--disabled .mdc-text-field__input {
    color: rgba(var(--mdc-theme-on-${theme}-rgb), 0.87);
  }
  &&&.mdc-theme--on-${theme}:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: var(--mdc-theme-on-${theme});
  }
  &&&.mdc-text-field.mdc-theme--on-${theme}:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing {
    color: rgba(var(--mdc-theme-on-${theme}-rgb), 0.54);
  }
  &&&.mdc-text-field--disabled.mdc-theme--on-${theme} .mdc-floating-label {
    color: rgba(var(--mdc-theme-on-${theme}-rgb), 0.6);
  }
  &&&.mdc-text-field--disabled .mdc-text-field__icon--trailing {
    color: rgba(var(--mdc-theme-on-${theme}-rgb), 0.6);
  }
  &&&.mdc-text-field--invalid.mdc-theme--on-${theme}:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: var(--mdc-theme-error);
  }
  &&&.mdc-text-field--outlined.mdc-theme--${theme}-bg:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
  &&&.mdc-text-field--outlined.mdc-theme--${theme}-bg:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
  &&&.mdc-text-field--outlined.mdc-theme--${theme}-bg:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
    border-color: var(--mdc-theme-border-on-${theme});
  }
  &&&.mdc-text-field--outlined.mdc-theme--${theme}-bg:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
  &&&.mdc-text-field--outlined.mdc-theme--${theme}-bg:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
  &&&.mdc-text-field--outlined.mdc-theme--${theme}-bg:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
    background-color: rgba(var(--mdc-theme-${theme}-rgb), 0.9);
  }
  &&&.mdc-text-field--outlined.mdc-text-field--disabled.mdc-theme--on-${theme} .mdc-notched-outline__leading,
  &&&.mdc-text-field--outlined.mdc-text-field--disabled.mdc-theme--on-${theme} .mdc-notched-outline__notch,
  &&&.mdc-text-field--outlined.mdc-text-field--disabled.mdc-theme--on-${theme} .mdc-notched-outline__trailing {
    border-color: var(--mdc-theme-border-on-${theme});
  }
  &&&.mdc-text-field--outlined.mdc-text-field--invalid.mdc-theme--${theme}-bg:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
  &&&.mdc-text-field--outlined.mdc-text-field--invalid.mdc-theme--${theme}-bg:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
  &&&.mdc-text-field--outlined.mdc-text-field--invalid.mdc-theme--${theme}-bg:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
    border-color: var(--mdc-theme-error);
  }
  ${(props) =>
    props.readOnly &&
    `
    &&&.mdc-text-field--disabled.mdc-theme--on-${theme} .mdc-text-field__input {
      color: var(--mdc-theme-on-${theme});
    }
    &&&.mdc-text-field--disabled.mdc-theme--on-${theme} .mdc-floating-label {
      color: var(--mdc-theme-on-${theme});
    }
  `}
`

export const StyledTextField = styled(RmwcTextField)`
  &&& {
    width: 100%;
  }
  &&&:not(.mdc-text-field--textarea) {
    height: 42px;
  }
  &&&.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
  &&&.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    transform: translateY(-26.75px) scale(0.75);
  }
  &&&.mdc-text-field--outlined {
    border-radius: 5px;
  }
  &&&.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
    border-radius: 5px 0 0 5px;
  }
  &&& .mdc-text-field__input,
  &&& .mdc-floating-label {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
  &&& + .mdc-text-field-helper-line .mdc-text-field-helper-text {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 12px;
  }
  ${(props) =>
    props.readOnly &&
    `
    &&&.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,
    &&&.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,
    &&&.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing {
      border-color: rgba(0, 0, 0, 0.38);
    }
    &&&.mdc-text-field--disabled .mdc-text-field__input {
      color: rgba(0, 0, 0, 0.87);
    }
    &&&.mdc-text-field--disabled .mdc-floating-label {
      color: rgba(0, 0, 0, 0.6);
    }
  `}
  ${theme({theme: 'primary'})};
  ${theme({theme: 'neutral'})};
`

const MyTextField = ({
  field: {name, value},
  form,
  meta,
  label,
  helperText,
  disabled,
  readOnly,
  handleChange,
  handleBlur,
  normalize,
  type,
  textarea,
  textareaOptions,
  ...otherProps
}) => {
  const error = getIn(form.touched, name) ? getIn(form.errors, name) : null
  return (
    <StyledTextField
      data-cy={`text-field-${name}`}
      type={type}
      value={value || ''}
      label={label}
      name={name}
      onChange={(e) => {
        const normalizedValue = normalize(e.target.value === '' ? null : e.target.value)
        form.setFieldValue(name, normalizedValue)
        handleChange(normalizedValue, name, form)
      }}
      invalid={!!error}
      disabled={disabled}
      readOnly={readOnly}
      helpText={{
        persistent: true,
        ...(error && {validationMsg: true}),
        children: error ? error : helperText
      }}
      textarea={textarea}
      rows={textarea ? textareaOptions.rows : undefined}
      onBlur={(e) => {
        form.setFieldTouched(name, true)
        // Hack to wait for new value to be applied
        // Pending https://github.com/jaredpalmer/formik/issues/529
        // executed after the JavaScript runtime has finished processing any tasks already queued in the event loop.
        setTimeout(() => {
          handleBlur()
        }, 0)
      }}
      {...otherProps}
    />
  )
}

MyTextField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired
  }).isRequired,
  meta: PropTypes.object,
  label: PropTypes.string,
  helperText: PropTypes.node,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  normalize: PropTypes.func,
  outlined: PropTypes.bool,
  type: PropTypes.string,
  textarea: PropTypes.bool,
  textareaOptions: PropTypes.shape({
    rows: PropTypes.number
  })
}

const TextField = ({type, decimalMaskOptions, ...otherProps}) => {
  if (type === 'decimal') {
    const defaultDecimalMaskOptions = {
      prefix: '',
      suffix: '',
      includeThousandsSeparator: true,
      thousandsSeparatorSymbol: ',',
      allowDecimal: true,
      decimalSymbol: '.',
      allowNegative: false,
      allowLeadingZeroes: false
    }
    const decimalCurrencyMask = createNumberMask({
      ...defaultDecimalMaskOptions,
      ...decimalMaskOptions
    })
    return <MaskedInput mask={decimalCurrencyMask} render={(ref) => <MyTextField type="text" inputRef={ref} {...otherProps} />} />
  } else {
    return <MyTextField type={type} {...otherProps} />
  }
}

TextField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func.isRequired
  }).isRequired,
  meta: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  helperText: PropTypes.node,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  handleChange: PropTypes.func,
  normalize: PropTypes.func,
  outlined: PropTypes.bool,
  type: PropTypes.string,
  textarea: PropTypes.bool,
  textareaOptions: PropTypes.shape({
    rows: PropTypes.number
  }),
  decimalMaskOptions: PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    includeThousandsSeparator: PropTypes.bool,
    thousandsSeparatorSymbol: PropTypes.string,
    allowDecimal: PropTypes.bool,
    decimalSymbol: PropTypes.string,
    decimalLimit: PropTypes.string, // how many digits allowed after the decimal
    requireDecimal: PropTypes.bool,
    allowNegative: PropTypes.bool,
    allowLeadingZeroes: PropTypes.bool,
    integerLimit: PropTypes.number // limit length of integer numbers
  })
}

TextField.defaultProps = {
  outlined: true,
  type: 'text',
  disabled: false,
  readOnly: false,
  handleChange: () => {},
  normalize: (value) => value,
  textarea: false,
  textareaOptions: {
    rows: 4
  },
  decimalMaskOptions: {}
}

export {TextField}

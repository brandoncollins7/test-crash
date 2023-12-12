import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {Select as RmwcSelect} from '@rmwc/select'
import '@rmwc/select/styles'
import {getIn} from 'formik'

const theme = ({theme}) => css`
  &&&.mdc-theme--on-${theme}:not(.mdc-select--disabled) .mdc-select__selected-text {
    color: var(--mdc-theme-on-${theme});
  }
  &&&.mdc-theme--on-${theme}.mdc-select--disabled .mdc-select__selected-text {
    color: rgba(var(--mdc-theme-on-${theme}-rgb), 0.87);
  }
  &&&.mdc-theme--on-${theme}:not(.mdc-select--disabled) .mdc-floating-label {
    color: var(--mdc-theme-on-${theme});
  }
  &&&.mdc-theme--on-${theme}.mdc-select--disabled .mdc-floating-label {
    color: rgba(var(--mdc-theme-on-${theme}-rgb), 0.6);
  }
  &&&.mdc-theme--on-${theme}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label {
    color: var(--mdc-theme-error);
  }
  &&&.mdc-select--outlined.mdc-theme--${theme}-bg:not(.mdc-select--disabled) .mdc-notched-outline__leading,
  &&&.mdc-select--outlined.mdc-theme--${theme}-bg:not(.mdc-select--disabled) .mdc-notched-outline__notch,
  &&&.mdc-select--outlined.mdc-theme--${theme}-bg:not(.mdc-select--disabled) .mdc-notched-outline__trailing {
    border-color: var(--mdc-theme-border-on-${theme});
  }
  &&&.mdc-select--outlined.mdc-theme--${theme}-bg:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,
  &&&.mdc-select--outlined.mdc-theme--${theme}-bg:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,
  &&&.mdc-select--outlined.mdc-theme--${theme}-bg:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing {
    background-color: var(--mdc-theme-secondary); /* TODO stevo: update theme scheme with a var for this */
  }
  &&&.mdc-select--outlined.mdc-select--invalid.mdc-theme--${theme}-bg:not(.mdc-select--disabled) .mdc-notched-outline__leading,
  &&&.mdc-select--outlined.mdc-select--invalid.mdc-theme--${theme}-bg:not(.mdc-select--disabled) .mdc-notched-outline__notch,
  &&&.mdc-select--outlined.mdc-select--invalid.mdc-theme--${theme}-bg:not(.mdc-select--disabled) .mdc-notched-outline__trailing {
    border-color: var(--mdc-theme-error);
  }
  &&&.mdc-select--disabled.mdc-select--outlined.mdc-theme--on-${theme} .mdc-notched-outline__leading,
  &&&.mdc-select--disabled.mdc-select--outlined.mdc-theme--on-${theme} .mdc-notched-outline__notch,
  &&&.mdc-select--disabled.mdc-select--outlined.mdc-theme--on-${theme} .mdc-notched-outline__trailing {
    border-color: var(--mdc-theme-border-on-${theme});
  }
  ${(props) =>
    props.readOnly &&
    `
    &&&.mdc-select--disabled.mdc-theme--on-${theme} .mdc-select__selected-text {
      color: var(--mdc-theme-on-${theme});
    }
    &&&.mdc-select--disabled.mdc-theme--on-${theme} .mdc-floating-label {
      color: var(--mdc-theme-on-${theme});
    }
  `}
  &&&.mdc-select--invalid + .mdc-select-helper-text--validation-msg {
    color: var(--mdc-theme-error);
  }
  &&& .mdc-select__dropdown-icon .rmwc-icon {
    color: var(--mdc-theme-border-on-${theme});
  }
  &&&.mdc-theme--on-${theme} .mdc-menu .mdc-list {
    color: rgba(var(--mdc-theme-on-${theme}-rgb), 0.87);
  }
  &&&.mdc-theme--on-${theme} .mdc-list-item--selected,
  &&&.mdc-theme--on-${theme} .mdc-list-item--activated {
    color: var(--mdc-theme-on-${theme});
  }
  &&&.mdc-theme--on-${theme} .mdc-menu-surface {
    border-color: var(--mdc-theme-border-on-${theme});
  }
  /* Select menu speech bubble */
  &&&.mdc-theme--on-${theme} .mdc-menu-surface:before {
    border-color: var(--mdc-theme-border-on-${theme}) transparent;
  }
  &&&.mdc-theme--on-${theme} .mdc-menu-surface:after {
    border-color: var(--mdc-theme-${theme}) transparent;
  }
`

// eslint-disable-next-line no-unused-vars,react/prop-types
const FilteredSelect = ({dense, ...otherProps}) => <RmwcSelect {...otherProps} />

export const StyledSelect = styled(FilteredSelect)`
  &&&.mdc-select--outlined {
    border-radius: 5px;
    width: 100%;
  }

  &&& .mdc-select__dropdown-icon {
    margin-left: 6px;
    margin-right: 6px;
    > i {
      font-size: 16px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &&& .mdc-select__anchor {
    height: 42px;
  }
  ${(props) =>
    props.dense &&
    `
    &&& .mdc-select__anchor {
      height: 32px;
    }
  `}
  &&& .mdc-select__selected-text {
    height: 42px;
    line-height: 42px;
  }

  /*
  TODO Adnan: remove this hack once material-components-web.min.css is no longer used in frnt-back-ui
  This is a hack to fix the padding issue with the select on frnt-back-ui
  */
  &&&.mdc-select--outlined {
    .mdc-select__selected-text {
      padding: 0;
      width: 100%;
    }
    .mdc-select__selected-text-container {
      flex: 1;
    }
    .mdc-select__dropdown-icon {
      background: none;
      position: relative;
      bottom: auto;
      transform: none;
      transition: none;
      right: auto;
    }
  }

  ${(props) =>
    props.dense &&
    `
    &&& .mdc-select__selected-text {
      height: 32px;
      line-height: 32px;
    }
  `}
  &&&.mdc-select--outlined .mdc-floating-label {
    top: 11px;
  }
  ${(props) =>
    props.dense &&
    `
    &&&.mdc-select--outlined .mdc-floating-label {
      top: 6px;
    }
  `}
  &&&.mdc-select--with-leading-icon .mdc-select__icon {
    bottom: 10px;
    opacity: 1;
  }
  &&&.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
  &&&.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    transform: translateY(-92%) scale(0.75);
  }
  ${(props) =>
    props.dense &&
    `
    &&&.mdc-select--outlined
      .mdc-select__anchor.mdc-notched-outline--upgraded
      .mdc-floating-label--float-above,
    &&&.mdc-select--outlined
      .mdc-select__anchor
      .mdc-notched-outline--upgraded
      .mdc-floating-label--float-above {
      transform: translateY(-72%) scale(0.75);
    }
  `}

  &&& .mdc-select__selected-text,
  &&& .mdc-floating-label {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
  ${(props) =>
    props.dense &&
    `
    &&& .mdc-select__selected-text,
    &&& .mdc-floating-label {
      font-size: 12px;
    }
  `}
  ${(props) =>
    props.dense &&
    `
    &&& .mdc-floating-label {
      font-size: 12px;
    }
  `}
  ${(props) =>
    props.dense &&
    `
    &&& .mdc-notched-outline__leading {
      width: 6px;
    }
  `}
  ${(props) =>
    props.readOnly &&
    `
    &&&.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,
    &&&.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,
    &&&.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing {
      border-color: rgba(0, 0, 0, 0.38);
    }
    &&&.mdc-select--disabled .mdc-select__selected-text {
      color: rgba(0, 0, 0, 0.87);
    }
    &&&.mdc-select--disabled .mdc-floating-label {
      color: rgba(0, 0, 0, 0.6);
    }
  `}
  &&& .mdc-list {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
  &&& :not(.mdc-list--non-interactive) > :not(.mdc-list-item--disabled).mdc-list-item:hover::before {
    opacity: 0.25;
  }
  &&& + .mdc-select-helper-text {
    padding-right: 16px;
    padding-left: 16px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 12px;
  }
  ${(props) =>
    props.dense &&
    `
    &&& + .mdc-select-helper-text {
      padding-right: 10px;
      padding-left: 10px;
    }
  `}
  &&& .mdc-menu {
    width: 100%;
  }
  &&& .mdc-menu-surface {
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.38);
    margin-top: 0.5rem;
  }
  &&& .mdc-menu-surface.mdc-menu-surface--open {
    border-width: 2px;
  }
  /* Select menu speech bubble */
  &&& .mdc-menu-surface {
    overflow: visible;
  }
  &&& .mdc-list {
    overflow: auto;
    max-height: 256px;
  }
  &&& .mdc-menu-surface:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.38) transparent;
    display: block;
    width: 0;
    top: -8px;
    bottom: auto;
    left: auto;
    right: calc(25% - 8px);
    border-width: 0 8px 8px;
  }
  &&& .mdc-menu-surface:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-color: #fff transparent;
    display: block;
    width: 0;
    top: -6px;
    bottom: auto;
    left: auto;
    right: calc(25% - 8px + 2.5px);
    border-width: 0 6px 6px;
  }
  &&& .mdc-menu-surface.mdc-menu-surface--open:after {
    top: -4px;
    right: calc(25% - 8px + 4.5px);
    border-width: 0 4px 4px;
  }
  ${theme({theme: 'primary'})};
`

const SelectField = ({
  field: {name, value},
  form,
  meta,
  options,
  label,
  placeholder,
  helperText,
  disabled,
  readOnly,
  handleChange,
  handleBlur,
  normalize,
  dense,
  ...otherProps
}) => {
  const error = getIn(form.touched, name) ? getIn(form.errors, name) : null

  return (
    <StyledSelect
      data-cy={`select-field-${name}`}
      value={value ? `${value}` : ''}
      onChange={(e) => {
        const val = e.target.value === '' ? null : e.target.value
        const normalizedValue = normalize(val)
        form.setFieldValue(name, normalizedValue)
        handleChange(normalizedValue, name, form)
      }}
      label={label}
      placeholder={placeholder}
      options={options}
      invalid={!!error}
      disabled={disabled}
      onBlur={(e) => {
        form.setFieldTouched(name, true)
        // Hack to wait for new value to be applied
        // Pending https://github.com/jaredpalmer/formik/issues/529
        // executed after the JavaScript runtime has finished processing any tasks already queued in the event loop.
        setTimeout(() => {
          handleBlur()
        }, 0)
      }}
      readOnly={readOnly}
      helpText={{
        persistent: true,
        ...(error && {validationMsg: true}),
        children: error ? error : helperText
      }}
      dense={dense}
      {...otherProps}
    />
  )
}

SelectField.propTypes = {
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
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  normalize: PropTypes.func,
  icon: PropTypes.object,
  outlined: PropTypes.bool,
  dense: PropTypes.bool
}

SelectField.defaultProps = {
  outlined: true,
  disabled: false,
  readOnly: false,
  dense: false,
  handleChange: () => {},
  handleBlur: () => {},
  normalize: (value) => value
}

export {SelectField}

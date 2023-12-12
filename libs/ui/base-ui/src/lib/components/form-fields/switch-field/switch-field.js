import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {Switch} from '@rmwc/switch'
import styled from 'styled-components'
import {TextFieldHelperText} from '@frnt/base'
import '@rmwc/switch/styles'
const FilteredDiv = (props) => <div {...props} />
const StyledDiv = styled(FilteredDiv)`
  display: flex;
  align-items: center;

  .mdc-text-field-helper-text {
    padding: 0 0 0 44px;
  }
`
const FilteredSwitch = (props) => <Switch {..._.omit(props, ['checkedTriState'])} />
const StyledSwitch = styled(FilteredSwitch)`
  &&& > label {
    padding-left: 12px;
  }

  ${(props) =>
    props.checkedTriState === false &&
    `
    &:not(.mdc-switch--checked) .mdc-switch__thumb {
      background-color: grey;
      border-color: grey;
    }
  `}
`

export const SwitchField = ({
  field,
  label,
  error,
  form,
  helperText = '',
  style = {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleInit = () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleChange = () => {},
  normalize = (value) => value,
  disabled,
  readOnly,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleBlur = () => {},
  ...otherProps
}) => {
  const onChange = useCallback(
    (e) => {
      const normalizedValue = normalize(e.target.checked)
      form.setFieldValue(field.name, normalizedValue)
      handleChange(normalizedValue, field.name, form)
      form.setFieldTouched(field.name, true)
      // Hack to wait for new value to be applied
      // Pending https://github.com/jaredpalmer/formik/issues/529
      // executed after the JavaScript runtime has finished processing any tasks already queued in the event loop.
      setTimeout(() => {
        handleBlur()
      }, 0)
    },
    [field.name, form, handleChange, normalize]
  )

  return (
    <StyledDiv>
      <StyledSwitch
        data-cy={`switch-field-${field.name}`}
        checked={!!field.value}
        checkedTriState={_.isNil(field.value) ? null : !!field.value}
        onChange={onChange}
        disabled={!!disabled || !!readOnly}
        readOnly={readOnly ? 'readonly' : null}
        {..._.omit(otherProps, ['form', 'handleInit', 'handleChange', 'normalize'])}>
        {label}
      </StyledSwitch>
      {error && (
        <TextFieldHelperText persistent validationMsg>
          {error}
        </TextFieldHelperText>
      )}
      {!error && <TextFieldHelperText persistent>{helperText}</TextFieldHelperText>}
    </StyledDiv>
  )
}

SwitchField.propTypes = {
  field: PropTypes.object.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired
  }).isRequired,
  helperText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  style: PropTypes.object,
  handleInit: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  normalize: PropTypes.func,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool
}

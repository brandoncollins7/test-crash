import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Chip} from '../../chips/chip'
import {ChipSet} from '../../chips/chip-set'
import _ from 'lodash'
import {TextFieldHelperText} from '../text-field-helper-text'
import PropTypes from 'prop-types'
import {frnt} from '../../../themes/frnt'

const FilteredDiv = ({...otherProps}) => <div {...otherProps} />
const StyledDiv = styled(FilteredDiv)`
  &&& .mdc-chip-set--choice .mdc-chip {
    width: auto;
    height: 100%;
    padding: 4px 6px 4px 12px;
    border: 1px solid var(--mdc-theme-neutral3);
    border-radius: 10px;
    font-size: 10px;
    line-height: 1;
    background: var(--mdc-theme-background);
  }
  &&& .mdc-chip-set .mdc-chip {
    margin: 4px;
  }
  &&& .mdc-chip-set .mdc-chip:first-child {
    margin: 4px 4px 4px 0;
  }
  &&& .mdc-chip-set .mdc-chip:last-child {
    margin: 4px 0 4px 4px;
  }
  &&& .mdc-ripple-surface::before,
  .mdc-ripple-surface::after {
    background: var(--mdc-theme-background);
  }
  &&& .mdc-chip-set--choice .mdc-chip.mdc-chip--selected {
    opacity: 1;
  }
  &&& .mdc-chip-set {
    padding: 0;
    justify-content: flex-start;
    @media ${frnt.deviceDesktop} {
      justify-content: flex-end;
    }
  }
  &&& .mdc-chip__icon span {
    top: -3px;
    left: -3px;
    width: 5px;
    height: 5px;
    position: absolute;
    border-radius: 50%;
    background: var(--mdc-theme-icon-disable-gray-dot);
  }
  &&& .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,
  .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden) {
    margin-left: -2px;
    margin-right: 5px;
    width: 100%;
    height: 100%;
  }
  .mdc-chip .mdc-chip__ripple::before,
  .mdc-chip .mdc-chip__ripple::after {
    opacity: 0 !important;
  }
`

const FilteredChip = (props) => <Chip {..._.omit(props, ['invalid'])} />
const StyledChip = styled(FilteredChip)`
  ${(props) =>
    props.invalid &&
    ` &&& .mdc-chip-set--choice .mdc-chip  {
         border: 1px solid var(--mdc-theme-error);
    }`}
`

const ChipGroupField = ({
  id,
  children,
  field: {name, value},
  form,
  meta,
  disabled,
  readOnly,
  handleChange,
  options,
  helperText,
  ...otherProps
}) => {
  const [tmpValue, setTmpValue] = useState(null)

  useEffect(() => {
    if (options && options.length) {
      setTmpValue(
        options.map((option) => ({
          isToggled: (value || []).indexOf(option.value) !== -1,
          ...option
        }))
      )
    }
  }, [JSON.stringify(options), value])

  const error = form.errors[name] || meta?.error
  const tmpValueMap = tmpValue ? _.keyBy(tmpValue, 'value') : {}
  return (
    <StyledDiv>
      <ChipSet choice>
        {options.map((option, index) => (
          <StyledChip
            value={option.value || ''}
            onInteraction={() => {
              const newTmpValue = tmpValue.map((tmpValueOption) => {
                if (tmpValueOption.value === option.value) {
                  return {
                    ...tmpValueOption,
                    isToggled: !tmpValueOption.isToggled
                  }
                } else {
                  return tmpValueOption
                }
              })
              setTmpValue(newTmpValue)
              let newValue = null
              if (newTmpValue && newTmpValue.length) {
                newValue = []
                newTmpValue.forEach((tmpValueOption) => {
                  if (tmpValueOption.isToggled) {
                    newValue.push(tmpValueOption.value)
                  }
                })
              }
              form.setFieldValue(name, newValue)
              handleChange(newValue, name, form)
            }}
            label={option.label}
            name={name}
            key={index}
            id={`${id}--${option.value}`}
            selected={tmpValueMap[option.value]?.isToggled}
            placeholder=""
            disabled={disabled}
            readOnly={readOnly}
            invalid={!!error}
            icon={
              <span
                style={{
                  background: tmpValueMap[option.value]?.isToggled
                    ? option.color
                    : 'var(--mdc-theme-disabled)'
                }}
              />
            }
            {...otherProps}>
            {children}
          </StyledChip>
        ))}
      </ChipSet>
      {error && (
        <TextFieldHelperText persistent validationMsg>
          {error}
        </TextFieldHelperText>
      )}
      {!error && <TextFieldHelperText persistent>{helperText}</TextFieldHelperText>}
    </StyledDiv>
  )
}

ChipGroupField.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.any,
  field: PropTypes.object.isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func.isRequired
  }).isRequired,
  meta: PropTypes.object,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  handleChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      color: PropTypes.string
    })
  ).isRequired,
  helperText: PropTypes.string
}
export {ChipGroupField}

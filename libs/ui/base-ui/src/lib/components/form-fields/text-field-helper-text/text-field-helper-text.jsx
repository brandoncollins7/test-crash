import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {TextFieldHelperText as RmwcTextFieldHelperText} from '@rmwc/textfield'

export const StyledTextFieldHelperText = styled(RmwcTextFieldHelperText)`
  &&& {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 12px;
  }
  &&&.mdc-text-field-helper-text--validation-msg {
    color: var(--mdc-theme-error);
  }
`

const TextFieldHelperText = ({children, ...otherProps}) => {
  return <StyledTextFieldHelperText {...otherProps}>{children}</StyledTextFieldHelperText>
}

TextFieldHelperText.propTypes = {
  children: PropTypes.any
}

export {TextFieldHelperText}

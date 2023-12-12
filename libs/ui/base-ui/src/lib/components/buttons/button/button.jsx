import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {Button as RmwcButton} from '@rmwc/button'
import '@rmwc/button/styles'
const theme = ({selector = '&&&', theme}) => css`
  ${selector}.mdc-theme--on-${theme}:not(:disabled) {
    color: var(--mdc-theme-on-${theme});
  }
  ${selector}.mdc-button--raised.mdc-theme--${theme}-bg:not(:disabled),
  ${selector}.mdc-button--unelevated.mdc-theme--${theme}-bg:not(:disabled) {
    background-color: var(--mdc-theme-${theme});
  }
  ${selector}.mdc-button--raised.mdc-theme--on-${theme}:not(:disabled),
  ${selector}.mdc-button--unelevated.mdc-theme--on-${theme}:not(:disabled) {
    color: var(--mdc-theme-on-${theme});
  }
  ${selector}.mdc-button--raised.mdc-theme--${theme}-bg:disabled,
  ${selector}.mdc-button--unelevated.mdc-theme--${theme}-bg:disabled {
    background-color: var(--mdc-theme-disabled);
  }
  ${selector}.mdc-button--raised.mdc-theme--on-${theme}:disabled,
  ${selector}.mdc-button--unelevated.mdc-theme--on-${theme}:disabled {
    color: var(--mdc-theme-on-disabled);
  }
  ${selector}.mdc-theme--on-${theme}:not(:disabled) .rmwc-circular-progress {
    color: var(--mdc-theme-on-${theme});
  }
  ${selector}.mdc-theme--on-${theme}:disabled .rmwc-circular-progress {
    color: var(--mdc-theme-on-disabled);
  }
  ${selector}.mdc-theme--on-${theme}.mdc-button--outlined:not(:disabled) {
    border-color: var(--mdc-theme-border-on-${theme});
  }
`

export const buttonStyles = ({selector = '&&&'}) => css`
  ${selector} {
    padding: 0 1rem;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    text-transform: initial;
    height: ${({size}) => (size === 'small' ? '32px' : '42px')};
    font-weight: ${({size}) => (size === 'small' ? '500' : '700')};
    font-size: ${({size}) => (size === 'small' ? '12px' : '14px')};
  }
  ${(props) =>
    !props.label &&
    !props.children &&
    `
    ${selector} .mdc-button__icon {
      margin-left: initial;
      margin-right: initial;
    }
    ${selector} .mdc-button__label {
      padding-left: 0.5rem;
    }
  `}
  .mdc-button--raised:disabled, .mdc-button--unelevated:disabled {
    color: var(--mdc-theme-on-disabled);
  }
  ${theme({selector, theme: 'primary2'})};
  ${theme({selector, theme: 'primary3'})};
  ${theme({selector, theme: 'secondary3'})};
  ${theme({selector, theme: 'neutral3'})};
`

const StyledRmwcButton = styled(RmwcButton)`
  ${buttonStyles}
`

const Button = ({children, ...otherProps}) => (
  <StyledRmwcButton {...otherProps}>{children}</StyledRmwcButton>
)

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  size: PropTypes.string
}

Button.defaultProps = {
  type: 'button'
}

export {Button}

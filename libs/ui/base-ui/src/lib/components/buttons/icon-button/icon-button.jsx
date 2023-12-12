import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {IconButton as RmwcIconButton} from '@rmwc/icon-button'
import '@rmwc/icon-button/styles'

const theme = ({theme}) => css`
  &&&.mdc-theme--${theme}:not(:disabled) {
    color: var(--mdc-theme-${theme});
  }
`
const StyledRmwcIconButton = styled(RmwcIconButton)`
  &&&.rmwc-icon--size-xsmall {
    width: calc(1.125rem * 2);
    height: calc(1.125rem * 2);
    font-size: 1.125rem;
    padding: 8px;
  }
  &&&.rmwc-icon--size-small {
    width: calc(1.25rem * 2);
    height: calc(1.25rem * 2);
    font-size: 1.25rem;
    padding: 8px;
  }
  &&&.rmwc-icon--size-medium {
    width: calc(1.5rem * 2);
    height: calc(1.5rem * 2);
    font-size: 1.5rem;
    padding: 8px;
  }
  &&&.rmwc-icon--size-large {
    width: calc(2.25rem * 2);
    height: calc(2.25rem * 2);
    font-size: 2.25rem;
    padding: 8px;
  }
  &&&.rmwc-icon--size-xlarge {
    width: calc(3rem * 2);
    height: calc(3rem * 2);
    font-size: 3rem;
    padding: 8px;
  }
  ${theme({theme: 'neutral4'})};
`

const IconButton = ({children, ...otherProps}) => (
  <StyledRmwcIconButton {...otherProps}>{children}</StyledRmwcIconButton>
)

IconButton.propTypes = {
  children: PropTypes.any
}

export {IconButton}

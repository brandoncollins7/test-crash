import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {CircularProgress as RmwcCircularProgress} from '@rmwc/circular-progress'
import '@rmwc/circular-progress/styles'

const theme = ({selector = '&&&', theme}) => css`
  ${selector}.mdc-theme--${theme}.rmwc-circular-progress {
    color: var(--mdc-theme-${theme});
  }
`

export const StyledRmwcCircularProgress = styled(RmwcCircularProgress)`
  ${theme({theme: 'primary2'})};
  ${theme({theme: 'secondary3'})};
`

const CircularProgress = ({children, ...otherProps}) => (
  <StyledRmwcCircularProgress {...otherProps}>{children}</StyledRmwcCircularProgress>
)

CircularProgress.propTypes = {
  children: PropTypes.any
}

export {CircularProgress}

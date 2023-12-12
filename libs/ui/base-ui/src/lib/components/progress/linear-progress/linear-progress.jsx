import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {LinearProgress as RmwcLinearProgress} from '@rmwc/linear-progress'
import '@rmwc/linear-progress/styles'

// TODO stevo: fix dot icon size

function getDotIconHtml(color) {
  // TODO stevo: use color
  return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" enable-background="new 0 0 5 2" xml:space="preserve" viewBox="0 0 5 2" preserveAspectRatio="none slice"><circle cx="1" cy="1" r="1" fill="#e6e6e6"/></svg>`
}

const theme = ({theme}) => css`
  &&&.mdc-theme--${theme} .mdc-linear-progress__bar-inner {
    border-color: var(--mdc-theme-${theme});
  }
`

export const StyledRmwcLinearProgress = styled(RmwcLinearProgress)`
  &&& {
    height: 8px;
    border-radius: 5px;
  }
  &&& .mdc-linear-progress__bar-inner {
    border-top: 8px solid;
  }
  &&& .mdc-linear-progress__buffering-dots {
    /*background-size: 20px 8px;*/
    /*animation: mdc-linear-progress-buffering 250ms infinite linear;*/
    background-image: url(data:image/svg+xml,${encodeURIComponent(
      getDotIconHtml('var(--mdc-theme-neutral3)')
    )});
  }
  ${theme({theme: 'secondary2'})};
  ${theme({theme: 'secondary3'})};
`

const LinearProgress = ({children, ...otherProps}) => (
  <StyledRmwcLinearProgress {...otherProps}>{children}</StyledRmwcLinearProgress>
)

LinearProgress.propTypes = {
  children: PropTypes.any
}

export {LinearProgress}

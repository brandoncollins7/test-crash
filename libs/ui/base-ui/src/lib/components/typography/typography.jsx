import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {Typography as RmwcTypography} from '@rmwc/typography'

const theme = ({selector = '&&&', theme}) => css`
  ${selector}.mdc-theme--${theme} {
    color: var(--mdc-theme-${theme});
  }
`

const headlineFontFamily = css`
  font-family: 'Inter', sans-serif;
`
const bodySharedStyles = css`
  font-family: 'Open Sans', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
`

// eslint-disable-next-line no-unused-vars,react/prop-types
const FilteredRmwcTypography = ({isLoading, ...otherProps}) => <RmwcTypography {...otherProps} />

const StyledRmwcTypography = styled(FilteredRmwcTypography)`
  margin-top: 0;
  &&&.mdc-typography--headline1 {
    // 4xl
    ${headlineFontFamily}
    font-size: 42px;
    font-weight: 700;
    line-height: 57.29px;
  }
  &&&.mdc-typography--headline2 {
    // 3xl
    ${headlineFontFamily}
    font-size: 28px;
    font-weight: 700;
    line-height: 38.19px;
  }
  &&&.mdc-typography--headline3 {
    // 2xl
    ${headlineFontFamily}
    font-size: 24px;
    font-weight: 700;
    line-height: 24.55px;
  }
  &&&.mdc-typography--headline4 {
    // xl
    ${headlineFontFamily}
    font-size: 12px;
    font-weight: 700;
    line-height: 16.37px;
  }
  &&&.mdc-typography--body-large-bold {
    // md
    ${bodySharedStyles}
    font-size: 24px;
    font-weight: 700;
    line-height: 32.74px;
  }
  &&&.mdc-typography--body-large-regular {
    //md
    ${bodySharedStyles}
    font-size: 24px;
    font-weight: 400;
    line-height: 32.74px;
  }
  &&&.mdc-typography--body-medium-bold {
    ${bodySharedStyles}
    font-size: 18px;
    font-weight: 700;
    line-height: 24.55px;
  }
  &&&.mdc-typography--body-medium-regular {
    ${bodySharedStyles}
    font-size: 18px;
    font-weight: 400;
    line-height: 24.55px;
  }
  &&&.mdc-typography--body-small-bold {
    ${bodySharedStyles}
    font-size: 14px;
    font-weight: 700;
    line-height: 19.1px;
  }
  &&&.mdc-typography--body-small-regular {
    ${bodySharedStyles}
    font-size: 14px;
    font-weight: 400;
    line-height: 19.1px;
  }
  &&&.mdc-typography--body-xsmall-bold {
    ${bodySharedStyles}
    font-size: 12px;
    font-weight: 700;
    line-height: 16.37px;
  }
  &&&.mdc-typography--body-xsmall-semibold {
    ${bodySharedStyles}
    font-size: 12px;
    font-weight: 600;
    line-height: 16.37px;
  }
  &&&.mdc-typography--body-xsmall-regular {
    ${bodySharedStyles}
    font-size: 12px;
    font-weight: 400;
    line-height: 16.37px;
  }

  ${(props) =>
    props.isLoading &&
    `
    @keyframes wave-rectangle {
      0% {
        background-position: -50% 0;
      }
      100% {
        background-position: 50% 0;
      }
    }
    &&&  {
      animation: wave-rectangle 2s infinite ease-out;
      background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);
      background-size: 1000% 100%;
      border-radius: 0.25rem;
      width: 100%;
    }
    &&&.mdc-typography--headline1 {
      height: 57.29px;
    }
    &&&.mdc-typography--headline2 {
      height: 38.19px;
    }
    &&&.mdc-typography--headline3 {
      height: 24.55px;
    }
    &&&.mdc-typography--headline4 {
      height: 16.37px;
    }
    &&&.mdc-typography--body-large-bold {
      height: 32.74px;
    }
    &&&.mdc-typography--body-medium-bold {
      height: 24.55px;
    }
    &&&.mdc-typography--body-medium-regular {
      height: 24.55px;
    }
    &&&.mdc-typography--body-small-bold {
      height: 19.1px;
    }
    &&&.mdc-typography--body-small-regular {
      height: 19.1px;
    }
    &&&.mdc-typography--body-xsmall-bold {
      height: 16.37px;
    }
    &&&.mdc-typography--body-xsmall-semibold {
      height: 16.37px;
    }
    &&&.mdc-typography--body-xsmall-regular {
      height: 16.37px;
    }
  `}
  ${theme({theme: 'neutral4'})};
  ${theme({theme: 'primary'})};
  ${theme({theme: 'neutral'})};
  ${theme({theme: 'neutral3'})};
  ${theme({theme: 'neutral4'})};
  ${theme({theme: 'success'})};
  ${theme({theme: 'error'})};
`

const Typography = ({children, ...otherProps}) => <StyledRmwcTypography {...otherProps}>{children}</StyledRmwcTypography>

Typography.propTypes = {
  children: PropTypes.any,
  use: PropTypes.oneOf([
    'headline1',
    'headline2',
    'headline3',
    'headline4',
    'body-large-bold',
    'body-large-regular',
    'body-medium-bold',
    'body-medium-regular',
    'body-small-bold',
    'body-small-regular',
    'body-xsmall-bold',
    'body-xsmall-semibold',
    'body-xsmall-regular'
  ]),
  tag: PropTypes.string,
  isLoading: PropTypes.bool
}

Typography.defaultProps = {
  isLoading: false
}

export {Typography}

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Icon as RmwcIcon} from '@rmwc/icon'
import '@rmwc/icon/styles'

// eslint-disable-next-line no-unused-vars,react/prop-types
const FilteredRmwcIcon = ({isLoading, ...otherProps}) => <RmwcIcon {...otherProps} />

export const StyledRmwcIcon = styled(FilteredRmwcIcon)`
  &&&.rmwc-icon--size-xsmall {
    font-size: 1.125rem;
  }
  &&&.rmwc-icon--size-small {
    font-size: 1.25rem;
  }
  &&&.rmwc-icon--size-medium {
    font-size: 1.5rem;
  }
  &&&.rmwc-icon--size-large {
    font-size: 2.25rem;
  }
  &&&.rmwc-icon--size-xlarge {
    font-size: 3rem;
  }

  ${(props) =>
    props.isLoading &&
    `
    @keyframes wave-square {
      0% {
        background-position: -50% 0;
      }
      100% {
        background-position: 50% 0;
      }
    }
    &&&  {
      animation: wave-square 2s infinite ease-out;
      background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);
      background-size: 1000% 100%;
      border-radius: 50%;
      width: 24px;
      height: 24px;
    }
    &&&.rmwc-icon--size-xsmall {
      width: 1.125rem;
      height: 1.125rem;
    }
    &&&.rmwc-icon--size-small {
      width: 1.25rem;
      height: 1.25rem;
    }
    &&&.rmwc-icon--size-medium {
      width: 1.5rem;
      height: 1.5rem;
    }
    &&&.rmwc-icon--size-large {
      width: 2.25rem;
      height: 2.25rem;
    }
    &&&.rmwc-icon--size-xlarge {
      width: 3rem;
      height: 3rem;
    }
  `}
`

const Icon = (props) => <StyledRmwcIcon {...props} />

Icon.propTypes = {
  isLoading: PropTypes.bool
}

Icon.defaultProps = {
  isLoading: false
}

export {Icon}

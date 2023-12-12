import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {customSvgs} from './crypto-icon.images'

// eslint-disable-next-line no-unused-vars,react/prop-types
const FilteredImg = ({size, isLoading, ...otherProps}) => <img {...otherProps} />

const StyledImg = styled(FilteredImg)`
  height: auto;
  ${(props) =>
    !!props.size &&
    `
      width: ${props.size}px;
    `}
`

// eslint-disable-next-line no-unused-vars,react/prop-types
const FilteredDiv = ({size, isLoading, ...otherProps}) => <div {...otherProps} />

const StyledLoadingDiv = styled(FilteredDiv)`
  @keyframes wave-square {
    0% {
      background-position: -50% 0;
    }
    100% {
      background-position: 50% 0;
    }
  }
  animation: wave-square 2s infinite ease-out;
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 1000% 100%;
  border-radius: 50%;
  ${(props) =>
    !!props.size &&
    `
      width: ${props.size}px;
      height: ${props.size}px;
    `}
`

const CryptoIcon = ({isLoading, name, iconStyle, ...otherProps}) => {
  if (isLoading) {
    return <StyledLoadingDiv {...otherProps} />
  } else {
    let src = null
    try {
      if (name === 'cad') {
        src = customSvgs[name][iconStyle]
      } else {
        src = require(`cryptocurrency-icons/svg/${iconStyle}/${name}.svg`).default
      }
    } catch (e) {
      src = require(`cryptocurrency-icons/svg/${iconStyle}/generic.svg`).default
    }
    return <StyledImg src={src} alt={name} {...otherProps} />
  }
}

CryptoIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  iconStyle: PropTypes.oneOf(['black', 'color', 'icon', 'white']),
  isLoading: PropTypes.bool
}

CryptoIcon.defaultProps = {
  name: 'generic',
  size: 24,
  iconStyle: 'color',
  isLoading: false
}

export {CryptoIcon}

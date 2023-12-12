import React from 'react'
import PropTypes from 'prop-types'
import {Chip as RmwcChip} from '@rmwc/chip'
import '@rmwc/chip/styles'

const Chip = ({children, ...otherProps}) => <RmwcChip {...otherProps}>{children}</RmwcChip>
Chip.propTypes = {
  children: PropTypes.any
}
export {Chip}

import React from 'react'
import PropTypes from 'prop-types'
import {ChipSet as RmwcChipSet} from '@rmwc/chip'
import '@rmwc/chip/styles'
const ChipSet = ({children, ...otherProps}) => <RmwcChipSet {...otherProps}>{children}</RmwcChipSet>
ChipSet.propTypes = {
  children: PropTypes.any
}
export {ChipSet}

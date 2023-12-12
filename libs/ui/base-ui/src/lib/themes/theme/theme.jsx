import React from 'react'
import PropTypes from 'prop-types'
import {Theme as RmwcTheme} from '@rmwc/theme'
import '@rmwc/theme/styles'

const Theme = ({children, ...otherProps}) => <RmwcTheme {...otherProps}>{children}</RmwcTheme>

Theme.propTypes = {
  children: PropTypes.node
}

export {Theme}

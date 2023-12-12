import React from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider as RmwcThemeProvider} from '@rmwc/theme'
import '@rmwc/theme/styles'

const ThemeProvider = ({children, ...otherProps}) => (
  <RmwcThemeProvider {...otherProps}>{children}</RmwcThemeProvider>
)

ThemeProvider.propTypes = {
  children: PropTypes.node
}

export {ThemeProvider}

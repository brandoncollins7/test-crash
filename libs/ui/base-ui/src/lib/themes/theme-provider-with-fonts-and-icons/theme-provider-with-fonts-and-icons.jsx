import React from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider} from '../theme-provider'

const ThemeProviderWithFontsAndIcons = ({options, children}) => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Open+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <ThemeProvider options={options}>{children}</ThemeProvider>
    </>
  )
}

ThemeProviderWithFontsAndIcons.propTypes = {
  options: PropTypes.object.isRequired,
  children: PropTypes.node
}

export {ThemeProviderWithFontsAndIcons}

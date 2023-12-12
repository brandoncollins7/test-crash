import React from 'react'
import {ThemeProviderWithFontsAndIcons} from '../src'
import {frnt} from '../src'
import '@rmwc/snackbar/styles'
export const decorators = [
  (Story) => (
    <ThemeProviderWithFontsAndIcons options={frnt}>
      <Story />
    </ThemeProviderWithFontsAndIcons>
  )
]

export const parameters = {
  // ... your other parameters
}

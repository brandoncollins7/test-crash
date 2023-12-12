// import the component you're documenting
import {ThemeProvider} from './theme-provider'
import React from 'react'
// Default export contains component metadata
export default {
  title: 'themes/theme-provider',
  tags: ['autodocs'] // enable automatic documentation page
}
// Each story is a function that returns some JSX
export const BasicTheme = () => (
  <ThemeProvider
    options={{
      primary: '#1A1A35',
      secondary: '#2C2C48',
      textPrimaryOnBackground: '#000000',
      textHintOnPrimary: '#343AC9'
    }}
  />
)
BasicTheme.storyName = 'Basic Theme Provider'
BasicTheme.parameters = {
  component: ThemeProvider,
  docs: {
    description: {
      story: 'A ThemeProvider that provides a basic theme.'
    }
  }
}

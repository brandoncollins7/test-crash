import React from 'react'
import {Theme} from './theme'

export default {
  component: Theme,
  title: 'themes/theme',
  tags: ['autodocs']
}

export const BasicTheme = () => <Theme use="primaryBg" />

/**
 * ## Theme
 *
 * A theme component that allows for easy customization of the background colors and text styles.
 */
export const ThemeComponent = (args) => <Theme {...args} />
ThemeComponent.args = {use: 'primary2Bg'}

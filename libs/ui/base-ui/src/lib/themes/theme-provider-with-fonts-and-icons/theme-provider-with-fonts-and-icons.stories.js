import React from 'react'
import {ThemeProviderWithFontsAndIcons} from './theme-provider-with-fonts-and-icons'
import {themes} from '@storybook/theming'

export default {
  title: 'themes/theme-provider-with-fonts-and-icons',
  component: ThemeProviderWithFontsAndIcons,
  decorators: [],
  parameters: {
    docs: {
      description: {
        component: 'A ThemeProviderWithFontsAndIcons component.'
      },
      labels: ['label1', 'label2', 'label3']
    }
  }
}

export const Default = () => <ThemeProviderWithFontsAndIcons options={themes.light} />

export const WithCustomOptions = () => (
  <ThemeProviderWithFontsAndIcons
    options={{
      primary: '#1A1A35',
      secondary: '#2C2C48',
      textPrimaryOnBackground: '#000000',
      textHintOnPrimary: '#343AC9'
    }}
  />
)

export const WithLiveOptionChange = (args, {argTypes}) => {
  return (
    <ThemeProviderWithFontsAndIcons
      options={{
        primary: args.primary,
        secondary: args.secondary,
        textPrimaryOnBackground: args.textPrimaryOnBackground,
        textHintOnPrimary: args.textHintOnPrimary
      }}
    />
  )
}

WithLiveOptionChange.args = {
  primary: '#1A1A35',
  secondary: '#2C2C48',
  textPrimaryOnBackground: '#000000',
  textHintOnPrimary: '#343AC9'
}

WithLiveOptionChange.argTypes = {
  primary: {control: 'color'},
  secondary: {control: 'color'},
  textPrimaryOnBackground: {control: 'color'},
  textHintOnPrimary: {control: 'color'}
}

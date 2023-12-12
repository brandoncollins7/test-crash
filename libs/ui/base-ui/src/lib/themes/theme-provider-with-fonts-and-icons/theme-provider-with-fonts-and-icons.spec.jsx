import React from 'react'
import {render} from '@testing-library/react'
import {BasicThemeProviderWithFontsAndIcons} from './theme-provider-with-fonts-and-icons.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<BasicThemeProviderWithFontsAndIcons />)
  // const rendered = getByText('hello from ThemeProviderWithFontsAndIcons')
  // expect(rendered).toBeTruthy()
})

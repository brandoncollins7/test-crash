import React from 'react'
import {render} from '@testing-library/react'
import {BasicCryptoIcons} from './crypto-icon.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<BasicCryptoIcons />)
  // const rendered = getByText('hello from CryptoIcon')
  // expect(rendered).toBeTruthy()
})

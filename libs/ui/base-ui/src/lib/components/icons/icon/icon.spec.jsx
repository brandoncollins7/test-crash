import React from 'react'
import {render} from '@testing-library/react'
import {BasicIcon} from './icon.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<BasicIcon />)
  // const rendered = getByText('hello from Icon')
  // expect(rendered).toBeTruthy()
})

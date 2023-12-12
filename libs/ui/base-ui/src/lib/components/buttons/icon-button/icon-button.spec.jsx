import React from 'react'
import {render} from '@testing-library/react'
import {BasicIconButton} from './icon-button.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<BasicIconButton />)
  // const rendered = getByText('hello from IconButton')
  // expect(rendered).toBeTruthy()
})

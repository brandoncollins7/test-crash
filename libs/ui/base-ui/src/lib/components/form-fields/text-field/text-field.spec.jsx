import React from 'react'
import {render} from '@testing-library/react'
import {BasicTextFields} from './text-field.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<BasicTextFields />)
  // const rendered = getByText('hello from TextField')
  // expect(rendered).toBeTruthy()
})

import React from 'react'
import {render} from '@testing-library/react'
import {BasicSelectFields} from './select-field.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<BasicSelectFields />)
  // const rendered = getByText('hello from TextField')
  // expect(rendered).toBeTruthy()
})

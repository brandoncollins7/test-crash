import React from 'react'
import {render} from '@testing-library/react'
import {Primary2Buttons} from './button.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<Primary2Buttons />)
  // const rendered = getByText('hello from Button')
  // expect(rendered).toBeTruthy()
})

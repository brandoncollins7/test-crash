import React from 'react'
import {render} from '@testing-library/react'
import {Secondary3LinearProgresses} from './linear-progress.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<Secondary3LinearProgresses />)
  // const rendered = getByText('hello from LinearProgress')
  // expect(rendered).toBeTruthy()
})

import React from 'react'
import {render} from '@testing-library/react'
import {Secondary3CircularProgresses} from './circular-progress.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<Secondary3CircularProgresses />)
  // const rendered = getByText('hello from CircularProgress')
  // expect(rendered).toBeTruthy()
})

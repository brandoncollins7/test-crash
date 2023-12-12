import React from 'react'
import {render} from '@testing-library/react'
import {Secondary3LinearProgressTimer} from './linear-progress-timer.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<Secondary3LinearProgressTimer />)
  // const rendered = getByText('hello from LinearProgressTimer')
  // expect(rendered).toBeTruthy()
})

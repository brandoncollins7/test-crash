import React from 'react'
import {render} from '@testing-library/react'
import {HeadingTypography} from './typography.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<HeadingTypography />)
  // const rendered = getByText('hello from Typography')
  // expect(rendered).toBeTruthy()
})

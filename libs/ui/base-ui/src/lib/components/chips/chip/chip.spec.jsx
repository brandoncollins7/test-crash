import React from 'react'
import {render} from '@testing-library/react'
import {BasicChip} from './chip.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<BasicChip />)
  // const rendered = getByText('hello from Chip');
  // expect(rendered).toBeTruthy();
})

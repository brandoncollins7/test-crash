import React from 'react'
import {render} from '@testing-library/react'
import {BasicChipSet} from './chip-set.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<BasicChipSet />)
  // const rendered = getByText('hello from ChipSet');
  // expect(rendered).toBeTruthy();
})

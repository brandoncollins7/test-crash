import React from 'react'
import {render} from '@testing-library/react'
import {BasicRadioGroupFields} from './radio-group-field.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<BasicRadioGroupFields />)
  // const rendered = getByText('hello from RadioGroupField');
  // expect(rendered).toBeTruthy();
})

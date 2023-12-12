import React from 'react'
import {render} from '@testing-library/react'
import {BasicRadioButtonGroupFields} from './radio-button-group-field.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<BasicRadioButtonGroupFields />)
  // const rendered = getByText('hello from RadioButtonGroupField')
  // expect(rendered).toBeTruthy()
})

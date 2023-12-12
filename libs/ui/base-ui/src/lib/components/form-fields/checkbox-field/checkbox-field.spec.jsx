import React from 'react'
import {render} from '@testing-library/react'
import {BasicCheckboxFields} from './checkbox-field.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<BasicCheckboxFields />)
  // const rendered = getByText('hello from CheckboxField')
  // expect(rendered).toBeTruthy()
})

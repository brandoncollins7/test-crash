import React from 'react'
import {render} from '@testing-library/react'
import {BasicTextFieldHelperText} from './text-field-helper-text.stories'

it('should render with the correct text', () => {
  const {getByText} = render(<BasicTextFieldHelperText />)
  // const rendered = getByText('hello from TextFieldHelperText')
  // expect(rendered).toBeTruthy()
})

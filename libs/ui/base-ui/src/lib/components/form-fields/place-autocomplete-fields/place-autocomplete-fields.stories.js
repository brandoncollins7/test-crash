import React from 'react'
import {PlaceAutocompleteFields} from './place-autocomplete-fields'

export default {
  component: PlaceAutocompleteFields,
  title: 'components/form-fields/place-autocomplete-fields',
  tags: ['autodocs'],
  decorators: []
}

export const BasicPlaceAutocompleteFields = (args) => <PlaceAutocompleteFields {...args} />

BasicPlaceAutocompleteFields.args = {
  name: 'example',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleBlur: () => {},
  disabled: false
}

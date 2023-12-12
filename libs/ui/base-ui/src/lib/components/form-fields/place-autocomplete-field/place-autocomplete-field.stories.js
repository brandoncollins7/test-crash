import React from 'react'
import {PlaceAutocompleteField} from './place-autocomplete-field'

export default {
  component: PlaceAutocompleteField,
  title: 'components/form-fields/place-autocomplete-field',
  tags: ['autodocs'],
  decorators: []
}

export const BasicPlaceAutocompleteField = (args) => <PlaceAutocompleteField {...args} />
BasicPlaceAutocompleteField.args = {
  handleLoad: () => console.log('handleLoad'),
  handlePlaceChanged: () => console.log('handlePlaceChanged')
}

export const WithComponentRestrictions = (args) => <PlaceAutocompleteField {...args} />
WithComponentRestrictions.args = {
  handleLoad: () => console.log('handleLoad'),
  handlePlaceChanged: () => console.log('handlePlaceChanged'),
  componentRestrictions: {country: 'us'}
}

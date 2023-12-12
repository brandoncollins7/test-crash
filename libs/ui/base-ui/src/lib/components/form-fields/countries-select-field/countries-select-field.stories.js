import React from 'react'
import {CountriesSelectField} from './countries-select-field'

export default {
  component: CountriesSelectField,
  title: 'components/form-fields/countries-select-field',
  tags: ['autodocs'],
  decorators: []
}

export const BasicCountriesSelectField = (args) => <CountriesSelectField {...args} />
BasicCountriesSelectField.args = {
  text: 'hello from CountriesSelectField'
}

export const CustomizedCountriesSelectField = (args) => <CountriesSelectField {...args} />

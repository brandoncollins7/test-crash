import React from 'react'
import {SelectField} from '../select-field'
import * as countries from 'country-list'

// TODO Adnan: Write docs,tests and compose this component
export const CountriesSelectField = (props) => {
  return (
    <SelectField
      theme={['neutral', 'onNeutral']}
      options={countries.getNames().map((country) => ({
        label: country,
        value: country.toLowerCase()
      }))}
      {...props}
    />
  )
}

CountriesSelectField.propTypes = {
  ...SelectField.propTypes
}

import React from 'react'
import {CheckboxGroupField} from './checkbox-group-field'

export default {
  component: CheckboxGroupField,
  title: 'components/form-fields/checkbox-group-field',
  tags: ['autodocs']
}

const Template = (args) => <CheckboxGroupField {...args} />

export const BasicCheckboxGroupField = Template.bind({})
BasicCheckboxGroupField.args = {
  field: {name: 'example', value: []},
  options: [
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2'},
    {value: 'option3', label: 'Option 3'}
  ],
  form: {
    touched: {},
    errors: {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setFieldValue: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setFieldTouched: () => {}
  },
  helperText: 'Select one or more options',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleBlur: () => {}
}

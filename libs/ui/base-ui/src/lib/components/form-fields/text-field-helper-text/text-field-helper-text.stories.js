import React from 'react'
import {TextFieldHelperText} from './text-field-helper-text'

export default {
  component: TextFieldHelperText,
  title: 'components/form-fields/text-field-helper-text',
  tags: ['autodocs']
}

export const BasicTextFieldHelperText = (args) => <TextFieldHelperText {...args}>This is the helper text</TextFieldHelperText>
BasicTextFieldHelperText.args = {
  persistent: true
}

export const ErrorTextFieldHelperText = (args) => <TextFieldHelperText {...args}>This is the helper text</TextFieldHelperText>
ErrorTextFieldHelperText.args = {
  persistent: true,
  validationMsg: true
}

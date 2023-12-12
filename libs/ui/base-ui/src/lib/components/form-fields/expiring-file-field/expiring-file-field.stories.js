import React from 'react'
import {ExpiringFileField} from './expiring-file-field'

export default {
  component: ExpiringFileField,
  title: 'components/form-fields/expiring-file-field',
  tags: ['autodocs']
}

export const BasicExpiringFileField = (args) => <ExpiringFileField {...args} />
BasicExpiringFileField.args = {
  text: 'hello from ExpiringFileField'
}

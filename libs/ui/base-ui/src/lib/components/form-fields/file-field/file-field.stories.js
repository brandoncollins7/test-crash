import {FileField} from './file-field'

export default {
  component: FileField,
  title: 'components/form-fields/file-field',
  tags: ['autodocs']
}

export const BasicFileField = () => <FileField text="hello from FileField" />

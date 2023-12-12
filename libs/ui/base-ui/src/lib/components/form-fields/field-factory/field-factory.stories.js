import {FieldFactory} from './field-factory'
import {Formik} from 'formik'

export default {
  component: FieldFactory,
  title: 'components/form-fields/field-factory',
  tags: ['autodocs']
}

export const BasicFieldFactory = (args) => (
  <Formik initialValues={{id: {number: '', expiry: ''}}}>
    <FieldFactory {...args} />
  </Formik>
)
BasicFieldFactory.args = {
  name: 'example',
  label: 'Example Label',
  type: 'text-field',
  options: [],
  isOptional: false,
  disabled: false,
  accessToken: '',
  isHidden: false,
  fileUploadUri: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleBlur: () => {}
}

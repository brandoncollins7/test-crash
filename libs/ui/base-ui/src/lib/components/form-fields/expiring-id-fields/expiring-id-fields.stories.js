import {ExpiringIdFields} from './expiring-id-fields'
import {Form, Formik} from 'formik'

export default {
  component: ExpiringIdFields,
  title: 'components/form-fields/expiring-id-fields',
  tags: ['autodocs']
}

const Template = (args) => (
  <Formik initialValues={{id: {number: '', expiry: ''}}}>
    <Form>
      <ExpiringIdFields accept={[]} {...args} />
    </Form>
  </Formik>
)

export const BasicExpiringIdFields = Template.bind({})
BasicExpiringIdFields.args = {
  name: 'id',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleBlur: () => {},
  form: {}
}

import {IdFields} from './id-fields'
import {useFormik} from 'formik'

export default {
  component: IdFields,
  title: 'components/form-fields/id-fields',
  tags: ['autodocs']
}

const Template = (args) => {
  const formik = useFormik({
    initialValues: {
      id: {
        type: '',
        front: '',
        back: ''
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: () => {}
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <IdFields {...args} {...formik} />
    </form>
  )
}

export const BasicIdFields = Template.bind({})
BasicIdFields.args = {
  name: 'id',
  authToken: 'exampleAuthToken',
  maxSize: 1000000,
  maxFiles: 1,
  uploadUri: 'https://example.com/upload',
  disabled: false
}

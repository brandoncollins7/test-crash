import {ChipGroupField} from './chip-group-field'

export default {
  component: ChipGroupField,
  title: 'components/form-fields/chip-group-field',
  tags: ['autodocs']
}

const options = [
  {
    value: 'BTC-20221230',
    name: 'BTC-20221230',
    label: 'BTC-20221230',
    color: 'var(--mdc-theme-primary2)'
  },
  {
    value: 'BTC-20230127',
    name: 'BTC-20230127',
    label: 'BTC-20230127',
    color: 'var(--mdc-theme-color-light-blue)'
  },
  {
    value: 'BTC-20230224',
    name: 'BTC-20230224',
    label: 'BTC-20230224',
    color: 'var(--mdc-theme-color-royal-blue)'
  },
  {
    value: 'BTC-20230331',
    name: 'BTC-20230331',
    label: 'BTC-20230331',
    color: 'var(--mdc-theme-color-green)'
  },
  {
    value: 'BTC-20230630',
    name: 'BTC-20230630',
    label: 'BTC-20230630',
    color: 'var(--mdc-theme-icon-dark-blue-dot)'
  },
  {
    value: 'BTC-20230929',
    name: 'BTC-20230929',
    label: 'BTC-20230929',
    color: 'var(--mdc-theme-icon-ash-gray-dot)'
  }
]

export const Default = (args) => (
  <ChipGroupField
    id="1"
    disabled={false}
    readOnly={false}
    form={{errors: {name: ''}}}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleChange={() => {}}
    field={{name: 'label', value: 'value'}}
    helperText="Choose one or more options"
    options={options}
    {...args}
  />
)

export const Disabled = (args) => (
  <ChipGroupField
    id="1"
    disabled={true}
    readOnly={false}
    form={{errors: {name: ''}}}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleChange={() => {}}
    field={{name: 'label', value: 'value'}}
    helperText="Choose one or more options"
    options={options}
    {...args}
  />
)

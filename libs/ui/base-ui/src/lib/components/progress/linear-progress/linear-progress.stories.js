import React from 'react'
import {Typography} from '../../typography'
import {LinearProgress} from './linear-progress'

export default {
  component: LinearProgress,
  title: 'components/progress/linear-progress',
  tags: ['autodocs']
}

const LinearProgressTemplate = (args) => (
  <div style={{width: '256px'}}>
    <LinearProgress {...args} />
  </div>
)

export const Default = LinearProgressTemplate.bind({})
Default.args = {
  progress: 0.5
}

export const Unbuffered = LinearProgressTemplate.bind({})
Unbuffered.args = {
  progress: 0.6,
  buffer: 1
}

export const Buffered = LinearProgressTemplate.bind({})
Buffered.args = {
  progress: 0.6,
  buffer: 0.8
}

export const Indeterminate = LinearProgressTemplate.bind({})
Indeterminate.args = {}

export const Reversed = LinearProgressTemplate.bind({})
Reversed.args = {
  progress: 0.2,
  reversed: true
}

export const Secondary3LinearProgresses = () => <LinearProgressesTemplate theme={['secondary3Bg', 'onSecondary3']} />

const LinearProgressesTemplate = (props) => (
  <>
    <div style={{marginBottom: '1rem'}}>
      <Typography use="body-small-regular">Default</Typography>
      <LinearProgressTemplate progress={0.5} {...props} />
    </div>
    <div style={{marginBottom: '1rem'}}>
      <Typography use="body-small-regular">Unbuffered</Typography>
      <LinearProgressTemplate progress={0.6} buffer={1} {...props} />
    </div>
    <div style={{marginBottom: '1rem'}}>
      <Typography use="body-small-regular">Buffered</Typography>
      <LinearProgressTemplate progress={0.6} buffer={0.8} {...props} />
    </div>
    <div style={{marginBottom: '1rem'}}>
      <Typography use="body-small-regular">Indeterminate</Typography>
      <LinearProgressTemplate {...props} />
    </div>
    <div style={{marginBottom: '1rem'}}>
      <Typography use="body-small-regular">Reversed</Typography>
      <LinearProgressTemplate progress={0.2} reversed {...props} />
    </div>
  </>
)

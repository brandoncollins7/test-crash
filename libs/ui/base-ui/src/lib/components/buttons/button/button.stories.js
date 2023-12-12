import React from 'react'
import {Button} from './button'
import {CircularProgress} from '../../progress/circular-progress'

export default {
  component: Button,
  title: 'components/buttons/button',
  decorators: [],
  parameters: {
    tags: ['autodocs']
  }
}

const ButtonsTemplate = (props) => (
  <div>
    <span style={{margin: '0 0.5rem'}}>
      <Button {...props} label="Button" />
    </span>
    <span style={{margin: '0 0.5rem'}}>
      <Button {...props} label="Icon" icon="favorite" />
    </span>
    <span style={{margin: '0 0.5rem'}}>
      <Button {...props} label="Trailing" trailingIcon="keyboard_arrow_right" />
    </span>
    <span style={{margin: '0 0.5rem'}}>
      <Button {...props} icon={<CircularProgress />} />
    </span>
    <span style={{margin: '0 0.5rem'}}>
      <Button {...props} label="Disabled" disabled />
    </span>
  </div>
)

const Primary2Buttons = () => <ButtonsTemplate unelevated theme={['primary2Bg', 'onPrimary2']} />

const Secondary3Buttons = () => <ButtonsTemplate unelevated theme={['secondary3Bg', 'onSecondary3']} />

const Neutral3Buttons = () => <ButtonsTemplate unelevated theme={['neutral3Bg', 'onNeutral3']} />

export const Primary2 = (args) => <Primary2Buttons {...args} />
Primary2.args = {}

export const Secondary3 = (args) => <Secondary3Buttons {...args} />
Secondary3.args = {}

export const Neutral3 = (args) => <Neutral3Buttons {...args} />
Neutral3.args = {}

export const Basic = (args) => <Button {...args} />
Basic.args = {
  label: 'Button'
}

export const Icon = (args) => <Button {...args} />
Icon.args = {
  label: 'Icon',
  icon: 'favorite'
}

export const Trailing = (args) => <Button {...args} />
Trailing.args = {
  label: 'Trailing',
  trailingIcon: 'keyboard_arrow_right'
}

export const WithCircularProgress = (args) => <Button {...args} icon={<CircularProgress />} />
WithCircularProgress.args = {}

export const Disabled = (args) => <Button {...args} label="Disabled" disabled />
Disabled.args = {}

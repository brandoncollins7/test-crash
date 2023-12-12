import React from 'react'
import {Button} from './button'
import {CircularProgress} from '../../progress/circular-progress'

export default {
  component: Button,
  // Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A Button component.'
      }
    }
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

export const Primary2Buttons = () => (
  <ButtonsTemplate unelevated theme={['primary2Bg', 'onPrimary2']} />
)

export const Secondary3Buttons = () => (
  <ButtonsTemplate unelevated theme={['secondary3Bg', 'onSecondary3']} />
)

export const Neutral3Buttons = () => (
  <ButtonsTemplate unelevated theme={['neutral3Bg', 'onNeutral3']} />
)

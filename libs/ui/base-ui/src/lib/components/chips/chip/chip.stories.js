import React from 'react'
import {Chip} from './chip'

export default {
  component: Chip,
  title: 'components/chips/chip',
  tags: ['autodocs']
}

export const BasicChip = (args) => <Chip {...args} />
BasicChip.args = {
  text: 'hello from Chip'
}

BasicChip.storyName = 'Basic Chip'
BasicChip.parameters = {
  docs: {
    description: {
      story: 'A Chip component.'
    }
  }
}

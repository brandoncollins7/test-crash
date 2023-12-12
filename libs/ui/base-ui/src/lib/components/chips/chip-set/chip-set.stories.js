import React from 'react'
import {ChipSet} from './chip-set'

export default {
  component: ChipSet,
  title: 'components/chips/chip-set',
  tags: ['autodocs']
}

export const BasicChipSet = (args) => <ChipSet {...args} />
BasicChipSet.args = {
  text: 'hello from ChipSet'
}

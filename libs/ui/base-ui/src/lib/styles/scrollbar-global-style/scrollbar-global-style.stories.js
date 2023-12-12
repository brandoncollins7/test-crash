import React from 'react'
import {ScrollbarGlobalStyle} from './scrollbar-global-style'

export default {
  title: 'styles/scrollbar-global-style',
  component: ScrollbarGlobalStyle,
  parameters: {
    tags: ['autodocs'],
    docs: {
      description: {
        component:
          "ScrollbarGlobalStyle is a component from styled-components that allows you to customize the website's scrollbar like Mac OS. It does not support Firefox and IE."
      }
    }
  }
}

export const Basic = () => <ScrollbarGlobalStyle />

Basic.decorators = [
  (Story) => (
    <>
      <ScrollbarGlobalStyle />
      <Story />
    </>
  )
]

Basic.parameters = {
  docs: {
    description: {
      story: 'This is an example of how to use the ScrollbarGlobalStyle component.'
    }
  }
}

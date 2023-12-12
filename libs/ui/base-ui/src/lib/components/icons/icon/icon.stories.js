import React from 'react'
import {Icon} from './icon'

export default {
  component: Icon,
  title: 'components/icons/icon',
  tags: ['autodocs']
}

export const BasicIcon = () => <Icon icon="favorite" />

export const LoadingIcon = () => <Icon isLoading />

export const ComponentIcon = () => (
  <Icon
    icon={
      <div
        style={{
          background: 'green',
          width: '24px',
          height: '24px',
          borderRadius: '100px'
        }}
      />
    }
  />
)

export const Sizes = () => (
  <>
    <Icon icon="favorite" size="xsmall" />
    <Icon icon="favorite" size="small" />
    <Icon icon="favorite" size="medium" />
    <Icon icon="favorite" size="large" />
    <Icon icon="favorite" size="xlarge" />
  </>
)

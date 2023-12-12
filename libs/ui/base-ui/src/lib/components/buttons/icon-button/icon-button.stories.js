import React from 'react'
import {IconButton} from './icon-button'

export default {
  component: IconButton,
  title: 'components/buttons/icon-button',
  tags: ['autodocs'],
  decorators: [],
  parameters: {
    componentSubtitle: 'A IconButton component.',
    docs: {
      page: null
    }
  }
}

export const BasicIconButton = () => <IconButton icon="star" label="Rate this!" />

export const DisabledIconButton = () => <IconButton icon="favorite" label="Favorite" disabled />

export const ImageIconButton = () => (
  <IconButton
    icon="https://rmwc.io/images/icons/twitter.png"
    aria-label="Tweet it!"
    tag="a"
    target="_blank"
    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('You should definitely be using RMWC for your next project! https://rmwc.io')}`}
  />
)

export const ToggleUncontrolledIconButtons = () => (
  <>
    <IconButton icon="favorite_border" onIcon="favorite" />
    <IconButton icon="favorite" onIcon="favorite" disabled />
  </>
)

export const ToggleControlledIconButtons = () => {
  const [isChecked, setIsChecked] = React.useState(false)
  return (
    <>
      <IconButton checked={isChecked} onClick={() => setIsChecked(!isChecked)} onIcon="star" icon="star_border" />

      <IconButton checked={isChecked} onClick={() => setIsChecked(!isChecked)} onIcon="https://rmwc.io/images/icons/twitter.png" icon="https://rmwc.io/images/icons/facebook.png" />
    </>
  )
}

export const ComponentIconButton = () => (
  <IconButton
    onIcon={
      <div
        style={{
          background: 'red',
          width: '24px',
          height: '24px'
        }}
      />
    }
    icon={
      <div
        style={{
          background: 'green',
          width: '24px',
          height: '24px',
          borderRadius: '50%'
        }}
      />
    }
  />
)

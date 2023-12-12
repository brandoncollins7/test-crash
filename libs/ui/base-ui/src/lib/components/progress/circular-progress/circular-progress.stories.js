import React from 'react'
import PropTypes from 'prop-types'
import {CircularProgress} from './circular-progress'
import {Typography} from '../../typography'

export default {
  component: CircularProgress,
  title: 'components/progress/circular-progress',
  tags: ['autodocs']
}

const CircularProgressesTemplate = ({containerStyle, ...otherProps}) => (
  <div style={containerStyle}>
    <div style={{marginBottom: '1rem'}}>
      <Typography use="body-small-regular">Default</Typography>
      <div>
        <CircularProgress progress={0.6} {...otherProps} />
      </div>
    </div>
    <div style={{marginBottom: '1rem'}}>
      <Typography use="body-small-regular">Indeterminate</Typography>
      <div>
        <CircularProgress {...otherProps} />
      </div>
    </div>
    <div>
      <Typography use="body-small-regular">Sizes</Typography>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <CircularProgress size="xsmall" {...otherProps} />
        <CircularProgress size="small" {...otherProps} />
        <CircularProgress size="medium" {...otherProps} />
        <CircularProgress size="large" {...otherProps} />
        <CircularProgress size="xlarge" {...otherProps} />
        <CircularProgress size={72} {...otherProps} />
      </div>
    </div>
  </div>
)

CircularProgressesTemplate.propTypes = {
  containerStyle: PropTypes.object
}

export const Primary2CircularProgresses = () => <CircularProgressesTemplate theme={['primary2']} />

export const OnPrimary2CircularProgresses = () => <CircularProgressesTemplate theme={['onPrimary2']} containerStyle={{backgroundColor: 'var(--mdc-theme-primary2)'}} />

export const Secondary3CircularProgresses = () => <CircularProgressesTemplate theme={['secondary3']} />

export const OnSecondary3CircularProgresses = () => <CircularProgressesTemplate theme={['onSecondary3']} containerStyle={{backgroundColor: 'var(--mdc-theme-secondary3)'}} />

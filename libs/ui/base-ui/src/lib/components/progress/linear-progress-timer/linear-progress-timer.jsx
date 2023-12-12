import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {useTimer} from 'react-timer-hook'
import {StyledRmwcLinearProgress} from '../linear-progress'

const LinearProgressTimer = ({expiresAt, isAutoStart, handleOnExpire, ...otherProps}) => {
  const [startedAt, setStartedAt] = useState(moment().toISOString())
  const {seconds, minutes, hours, days, restart} = useTimer({
    expiryTimestamp: new Date(expiresAt),
    autoStart: isAutoStart,
    onExpire: () => handleOnExpire()
  })
  useEffect(() => {
    setStartedAt(moment().toISOString())
    restart(new Date(expiresAt))
  }, [expiresAt])
  const totalMilliseconds = moment(expiresAt).diff(startedAt)
  const remainingMilliseconds = moment
    .duration({
      days,
      hours,
      minutes,
      seconds
    })
    .asMilliseconds()
  const percentage = remainingMilliseconds / totalMilliseconds

  return <StyledRmwcLinearProgress progress={percentage} buffer={1} {...otherProps} />
}

LinearProgressTimer.propTypes = {
  expiresAt: PropTypes.string.isRequired,
  isAutoStart: PropTypes.bool,
  handleOnExpire: PropTypes.func
}

LinearProgressTimer.defaultProps = {
  isAutoStart: true,
  handleOnExpire: () => {}
}

export {LinearProgressTimer}

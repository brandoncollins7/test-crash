import {LinearProgressTimer} from './linear-progress-timer'

export default {
  component: LinearProgressTimer,
  title: 'components/progress/linear-progress-timer',
  tags: ['autodocs']
}

const LinearProgressTimerTemplate = (args) => {
  const expiresAt = new Date()
  expiresAt.setSeconds(expiresAt.getSeconds() + 60) // 1 minute timer
  return (
    <div style={{width: '256px'}}>
      <LinearProgressTimer expiresAt={expiresAt.toISOString()} {...args} />
    </div>
  )
}

export const Secondary3LinearProgressTimer = () => {
  return LinearProgressTimerTemplate({theme: ['secondary3Bg', 'onSecondary3']})
}

Secondary3LinearProgressTimer.args = {}

import React from 'react'
import {frnt} from './frnt'

export const FrntDisplay = () => (
  <dl style={{display: 'flex', flexFlow: 'row', flexWrap: 'wrap', fontFamily: 'monospace'}}>
    {Object.entries(frnt).map(([key, value]) => (
      <>
        <dt style={{flex: '0 0 50%', textOverflow: 'ellipsis', overflow: 'hidden'}}>{key}</dt>
        <dd
          style={{
            flex: '0 0 50%',
            marginLeft: 'auto',
            textAlign: 'left',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
          }}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{marginRight: '0.5rem'}}>{value}</div>
            {value?.toString().startsWith('#') && (
              <div
                style={{
                  background: value,
                  width: '1rem',
                  height: '1rem',
                  borderRadius: '50%'
                }}
              />
            )}
          </div>
        </dd>
      </>
    ))}
  </dl>
)
export default {
  component: FrntDisplay,
  title: 'themes/frnt',
  tags: ['autodocs']
}

FrntDisplay.parameters = {
  docs: {
    source: {}
  }
}

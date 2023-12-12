import React from 'react'
import {CryptoIcon} from './crypto-icon'
import {Typography} from '../../typography'

export default {
  component: CryptoIcon,
  title: 'components/icons/crypto-icon',
  tags: ['autodocs']
}

const CryptoIconTemplate = (args) => <CryptoIcon {...args} />

export const Default = CryptoIconTemplate.bind({})
Default.args = {
  name: 'btc'
}

export const CAD = CryptoIconTemplate.bind({})
CAD.args = {
  name: 'cad'
}

export const Loading = CryptoIconTemplate.bind({})
Loading.args = {
  isLoading: true
}

export const Unknown = CryptoIconTemplate.bind({})
Unknown.args = {
  name: 'unknown'
}

export const Sizes = () => (
  <>
    <Typography use="body-small-regular" tag="p" style={{marginBottom: '1rem'}}>
      Sizes
    </Typography>
    <CryptoIcon name="eth" size={18} />
    <CryptoIcon name="eth" size={20} />
    <CryptoIcon name="eth" size={24} />
    <CryptoIcon name="eth" size={36} />
    <CryptoIcon name="eth" size={48} />
  </>
)

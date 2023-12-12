import {Axios} from './axios'

export default {
  component: Axios,
  title: 'tools/http/axios',
  tags: ['autodocs']
}

export const BasicAxios = () => Axios.getInstance('http://localhost:9000', () => null)
BasicAxios.storyName = 'Basic Axios'

export const TokenAxios = () => Axios.getInstance('http://localhost:9000', () => '123')
TokenAxios.storyName = 'Token Axios'

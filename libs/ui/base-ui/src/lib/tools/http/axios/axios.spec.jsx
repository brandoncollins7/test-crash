import {TokenAxios, BasicAxios} from './axios.stories'
import ServerMock from 'mock-http-server'

describe('Axios', () => {
  let server = new ServerMock({host: 'localhost', port: 9000})

  beforeEach((done) => {
    server.start(done)
  })

  afterEach((done) => {
    server.stop(done)
  })

  it('should get the response without a token', async () => {
    server.on({
      method: 'GET',
      path: '/resource',
      reply: {
        status: 200,
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({hello: 'world'})
      }
    })

    let axios = BasicAxios()
    axios.defaults.adapter = require('axios/lib/adapters/http')
    let {data} = await axios.get('/resource')
    expect(data).toStrictEqual({hello: 'world'})
  })
  it('should get the response with a token', async () => {
    server.on({
      method: 'GET',
      path: '/resource',
      reply: {
        status: 200,
        headers: {'content-type': 'application/json'},
        body: function (req) {
          console.log(req.rawHeaders[req.rawHeaders.indexOf('Authorization') + 1])
          return req.rawHeaders[req.rawHeaders.indexOf('Authorization') + 1]
        }
      }
    })

    let axios = TokenAxios()
    axios.defaults.adapter = require('axios/lib/adapters/http')
    let {data} = await axios.get('/resource')
    expect(data).toStrictEqual('Bearer 123')
  })
})

import axios from 'axios'

export class Axios {
  static getInstance(baseURL, getAccessTokenFunc, timeout = 10000) {
    const instance = axios.create({
      baseURL,
      timeout
    })
    instance.interceptors.request.use(async (config) => {
      if (!config.headers['Authorization']) {
        try {
          const accessToken = getAccessTokenFunc()

          if (accessToken) {
            config.headers = {
              ...config.headers,
              Authorization: accessToken ? `Bearer ${accessToken}` : undefined
            }
          }
        } catch (e) {
          console.log(`error in axios interceptor:  ${e}`)
        }
      }
      return config
    })

    return instance
  }
}

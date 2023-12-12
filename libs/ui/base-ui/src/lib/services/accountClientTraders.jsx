import qs from 'qs'

export default ({baseApi}) => ({
  async list(query) {
    const {data} = await baseApi.get(
      `/api/v1/org/account_client_traders${qs.stringify(query, {
        addQueryPrefix: true
      })}`
    )
    return data
  }
})

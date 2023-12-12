export default ({baseApi, oauthApi}) => ({
  async getMe(authorization) {
    // TODO stevo: change to oauthApi
    const {data} = await baseApi.get(`api/v1/oauth/users/me`, {
      headers: {
        Authorization: `Bearer ${authorization}`
      }
    })
    return data
  },
  async sendVerificationEmail({authorization, payload}) {
    const {data} = await oauthApi.post(`email_verification_tokens`, payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authorization}`
      }
    })
    return data
  }
})

// import {useSimpleQuery} from '@frnt/base/hooks/use-simple-query'
// import {useFrntApiService} from '@frnt/base/providers/frnt-api-service-provider'
//
// export const useCurrentUserQuery = ({accessToken, enabled, ...otherProps}) => {
//   const frntApiService = useFrntApiService()
//   return useSimpleQuery({
//     queryKey: `users-me-${accessToken}`,
//     queryFn: async () => frntApiService.users.getMe(accessToken),
//     enabled: enabled !== undefined ? enabled : !!accessToken,
//     ...otherProps
//   })
// }

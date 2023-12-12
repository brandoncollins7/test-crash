import React from 'react'
import {QueryClient, QueryClientProvider} from './react-query'

export const DefaultReactQuery = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div />
    </QueryClientProvider>
  )
}
export default {
  component: DefaultReactQuery,
  title: 'tools/http/react-query',
  tags: ['autodocs']
}

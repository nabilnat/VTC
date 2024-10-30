
import { Action } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User } from '@/types/User'
import { REHYDRATE } from 'redux-persist'

type RootState = any 

function isHydrateAction(action: Action): action is Action<typeof REHYDRATE> & {
  key: string
  payload: RootState
  err: unknown
} {
  return action.type === REHYDRATE
}

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'UserApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      // when persisting the api reducer
      if (action.key === 'key used with redux-persist') {
        return action.payload
      }
      return action.payload[userApi.reducerPath]
    }
  },
  endpoints: (builder) => ({
    getUser: builder.mutation({
        query: (data) => ({
          url: '/login', // Remplacez par votre endpoint
          method: 'POST',
          body: data,
    
    }),
  }),
})
});


export const { useGetUserMutation } = userApi
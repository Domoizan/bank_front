import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1/user' }),
    endpoints: (builder) => ({
      login: builder.mutation({
        query: (credentials) => ({
          url: '/login',
          method: 'POST',
          body: credentials,
        }),
      }),
      getUser:builder.mutation({
        query: (token) => ({
          url: '/profile',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      }),
      updateUser: builder.mutation({
        query: ( {token, userData} ) => ({
          url: `/profile`,
          method: 'PUT',
          headers: {
            
            Authorization: `Bearer ${token}`,
          },
          body: userData,
        }),
      }),
    }),
  });




export const { useLoginMutation } = userApi;
export const { useGetUserMutation } = userApi;
export const { useUpdateUserMutation } = userApi;
export const { reducer } = userApi;

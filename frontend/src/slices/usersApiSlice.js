import { apiSlice } from "./apiSlice.js";
import { USERS_URL } from "../constants.js"

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getUsers: builder.query({
            query : ({keyword,pageNumber}) => ({
                url: USERS_URL,
                params: {
                    keyword,
                    pageNumber,
                },
            }),
        }),
    })
})

export const {useGetUsersQuery} = usersApiSlice;
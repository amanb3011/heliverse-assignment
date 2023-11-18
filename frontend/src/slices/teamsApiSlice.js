import { TEAMS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const teamsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        addTeam: builder.mutation({
            query: (team) => ({
                url : TEAMS_URL,
                method : 'POST',
                body : team,
            }),
        }),
        getTeamDetails: builder.query({
            query: (id) => ({
                url : `${TEAMS_URL}/${id}`,
            }),
            keepUnusedDataFor : 5,
        }),
    }),
});

export const {useAddTeamMutation , useGetTeamDetailsQuery} = teamsApiSlice;


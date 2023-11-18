import { createSlice } from '@reduxjs/toolkit';


const initialState = localStorage.getItem('team')
  ? JSON.parse(localStorage.getItem('team'))
  : { teamMembers: []};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addToTeam: (state, action) => {
      // NOTE: we don't need user, rating, numReviews or reviews
      // in the cart

    },
    removeFromTeam: (state, action) => {
      
    },
    clearTeamMembers: (state, action) => {
    
    },
    resetTeam: (state) => (state = initialState),
  },
});

export const {
  addToTeam,
  removeFromTeam,
} = teamSlice.actions;

export default teamSlice.reducer;
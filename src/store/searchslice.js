import { createSlice } from "../../node_modules/@reduxjs/toolkit";

// Define the slice
const searchSlice = createSlice({
    name: "search",
    initialState: {}, // Provide an initial state
    reducers: {
        cacheResults: (state, action) => {
            // Mutate state directly or merge payload using Object.assign
            Object.assign(state, action.payload);
        },
    },
});

// Export the action creator
export const { cacheResults } = searchSlice.actions;

// Export the reducer
export default searchSlice.reducer;

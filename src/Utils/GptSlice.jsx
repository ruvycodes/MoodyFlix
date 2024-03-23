import { createSlice } from "@reduxjs/toolkit"

const GptSlice = createSlice({
    name: "gpt",
    initialState: {
        searchButtonToggle: false,
    },

    reducers: {

        toggleGptSearchButton: (state) => {
            state.searchButtonToggle = !state.searchButtonToggle;
        }
    }
})

export const { toggleGptSearchButton } = GptSlice.actions
export default GptSlice.reducer
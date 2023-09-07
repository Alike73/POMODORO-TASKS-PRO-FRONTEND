
import { createSlice } from '@reduxjs/toolkit';

export const pomodoroSlice = createSlice({
    name: 'pomodoroItems',

    initialState: {
        selectedCategory: 'ALL',
        showEditor: false,
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },

        setShowEditor: (state, action) => {
            state.showEditor = action.payload;
        }
    },
    
});

export const getSelectedCategory = state => state.pomodoroItems.selectedCategory;
export const getShowEditor = state => state.pomodoroItems.showEditor;
export const { filterCategory, setShowEditor } = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
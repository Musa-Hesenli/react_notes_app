import { createSlice } from "@reduxjs/toolkit";

export const statusFilters = {
    all : 'All',
    active : 'Active',
    completed : 'Completed',
    deleted : 'Deleted'
}

const initialFilterState = {
    colors : [],
    status : statusFilters.completed,
    query : '',
    tags : [
        { id : 1, title : 'Important', color : 'indigo' },
        { id : 2, title : 'Danger', color : '#dc3545' },
        { id : 3, title : 'Warning', color : '#e9a91f' },
        { id : 4, title : 'Success', color : 'green' }
    ]
}
const filterSlice = createSlice({
    name : 'filters',
    initialState : initialFilterState,
    reducers : {
        search(state, action) {
            state.query = action.payload;
        },
        colorFilterChange : {
            reducer(state, action) {
                const {color} = action.payload;
                const {colors} = state;
                if(!colors.includes(color)) {
                    colors.push(color)
                } else {
                    state.colors = colors.filter(item => item !== color)
                }; 
            },
            prepare(color) {
                return {
                    payload : {
                        color,
                    }
                }
            }   
        },
        changeStatus(state, action) {
            state.status = action.payload
        }
    }
});

export const { search, colorFilterChange, changeStatus } = filterSlice.actions;

export const getSelectedColors = state => state.filters.colors;

export const getTags = state => state.filters.tags;

export const currentStatus = state => state.filters.status;

export default filterSlice.reducer;
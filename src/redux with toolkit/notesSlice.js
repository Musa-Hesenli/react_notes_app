import { createSelector, createSlice } from "@reduxjs/toolkit";
import { statusFilters } from './filterSlice'

import uuid from 'react-uuid'

const initialNotes = [
    { id: '1', text: 'Musa Hesenli', bg: 'lightgray', completed : true, tags : [{
        id : 0, title : 'Important', color : 'indigo'
    }, {
        id : 1,title : 'Success', color : 'green'
    }], deleted : false },
    { id: '2', text: 'Lionel Messi', bg: 'lightblue', completed : false, tags : [], deleted : false }
]
const notesSlice = createSlice({
    name : 'notes',
    initialState : initialNotes,
    reducers : {
        createNote : {
            reducer (state, action) {
                state.push(action.payload)
            },
            prepare (text, bg, tags) {
                return {
                    payload : {
                        id : uuid(),
                        bg,
                        text,
                        tags,
                        completed : false,
                        deleted : false
                    }
                }
            }
        },
        deleteNote(state, action) {
            state.map(item=> {
                if(item.id === action.payload) {
                    item.deleted = true
                }
                return item;
            })
        },
        updateNote (state, action) {
            const {id, text, bg, tags} = action.payload;
            const item = state.find(item => item.id === id);
            item.text = text;
            item.bg = bg;
            item.tags = tags;
            return state;
        },
        filterNotes (state, action) {
            state.filter(item => item.text.toLowerCase().includes(action.payload.toLowerCase()));
        },
        markAllCompleted(state) {
            state.map(item => item.completed = true);
        },
        clearAllCompleted(state) {
            return state.filter(item => item.completed === false)
        },
        changeCompletedStatus(state, action) {
            const  note_id = action.payload;
            state.map(item => {
                if(item.id === note_id) {
                    item.completed = !item.completed;
                }
                return item;
            })
        }
    }
});

export const { createNote, deleteNote, updateNote, filterNotes, markAllCompleted, clearAllCompleted, changeCompletedStatus } = notesSlice.actions;

export const getAllNotes = (state) => state.notes;


export const selectFilteredNotes = createSelector(
    getAllNotes,
    (state) => state.filters,
    (notes, filters) => {
        const { status, colors } = filters;
        const showAllElements = status === statusFilters.all;
        const completedStatus = status === statusFilters.completed;
        const deletedStatus = status === statusFilters.deleted;
        const activeStatus = status === statusFilters.active;

        return notes.filter(item => {
            const queryMatches = item.text.toLowerCase().includes(filters.query.toLowerCase());
            let statusMatches = null;
            if(showAllElements ) statusMatches = true;
            else if(completedStatus && item.completed && !item.deleted) {
                statusMatches = true;
            } else if(deletedStatus && item.deleted) {
                    statusMatches = true;
            } else if(activeStatus && !item.deleted && !item.completed) {
                statusMatches= true;
            }
            const colorMatches = colors.length === 0 || colors.includes(item.bg);
            return statusMatches && colorMatches && queryMatches;
        })
    }
);



export default notesSlice.reducer;
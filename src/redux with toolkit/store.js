import { configureStore } from "@reduxjs/toolkit";
import notesSlice from './notesSlice';
import filterSlice from './filterSlice'

const store = configureStore({
    reducer : {
        notes : notesSlice,
        filters : filterSlice
    }
});
export default store;
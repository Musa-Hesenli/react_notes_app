import {createStore, combineReducers} from 'redux'
import notesReducer from '../reducers/notesReducer';

const commonReducer = combineReducers({
    notes : notesReducer
})

const store = createStore(commonReducer);

export default store;
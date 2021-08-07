import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../../redux with toolkit/notesSlice';


const Operations = ({ note_id, deleted, setMenuStatus, note, setUpdateWanted }) => {
    const dispatch = useDispatch();
    const removeNote = () => {
        dispatch(deleteNote(note_id));
    }

    const updateHandler = () => {
        console.log(note);
        setUpdateWanted(note);
        setMenuStatus(true);
    }

    if (deleted) {
        return '';
    }
    return (
        <div className='mt-3'>
            <button className='btn btn-primary' onClick={updateHandler}>Update</button>
            <button className='btn btn-danger' onClick={() => removeNote()} style={{ marginLeft : 10 }}>Delete</button>
        </div>
    )
}

export default Operations;
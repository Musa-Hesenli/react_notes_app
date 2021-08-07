import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createNote, updateNote } from "../../redux with toolkit/notesSlice";
import ColorSelector from "./ColorSelector";
import uuid from 'react-uuid'

const CreateNote = (props) => {
  const [color, changeColor] = useState("#35c45d");
  const [note, setNote] = useState("");
  const refButton = useRef();
  const updatedNote = props.updatedNote;

  const dispatch = useDispatch();

  useEffect(() => {
    if (updatedNote) {
      setNote(updatedNote.text);
      changeColor(updatedNote.bg);
    }
  }, [updatedNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color && note) {
      if (updatedNote) {
        dispatch(
          updateNote({
            id: updatedNote.id,
            text: note,
            bg: color,
          })
        );
        props.makeUpdate(null, false);
      } else dispatch(createNote({ id : uuid(),text: note, bg: color }));
      setNote("");
    }
  };

  
  return (
    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            name="note"
            className="form-control"
            rows="5"
            placeholder="Enter note text here"
            onChange={(e) => setNote(e.target.value)}
            value={note}
          ></textarea>
        </div>
        <div className="form-group mt-3">
          <div className="d-flex justify-content-end align-items-center">
            <ColorSelector setSelectedColor={changeColor}/>
            &nbsp;&nbsp;
            <button ref={refButton} className="btn btn-primary ">
              {props.isUpdate ? "Update" : "Create new Note"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;

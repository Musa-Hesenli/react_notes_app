import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCompletedStatus, selectFilteredNotes } from "../../../redux with toolkit/notesSlice";
import Operations from "../features/Operations";

function NoteList(props) {
  let renderedItem = "";
  const notes = useSelector(selectFilteredNotes);
  const dispatch = useDispatch();
  if (notes.length === 0) {
    renderedItem = <div className="list-group-item">No item to show</div>;
  } else {
    renderedItem = notes.map((item) => {
      return (
        <div className="list-group-item" key={item.id} style={{ border : item.deleted ? '1px solid #FF9079' : '' }}>
          <div className='d-flex justify-content-between align-item-center w-100'>
          <div className="list-group-left">
            { item.deleted ? '' : <input className="form-control-check" onChange={() => dispatch(changeCompletedStatus(item.id))} checked={item.completed} type="checkbox" /> }
            &nbsp; {item.text}
          </div>
          <div className="list-group-right d-flex align-items-center">
            <div>
              { item.tags.map(tag => {
                return <span key={tag.id} className="badge badge-pill" style={{ background : tag.color, marginRight : 5 }}>{tag.title}</span>
              })}
              
            </div>
            <span>&nbsp; 25 Jun</span>
            <div className="profile-photo" style={{ backgroundColor : item.bg }}></div>
          </div>
          </div>
          <Operations {...props} note={item} note_id = {item.id} deleted={item.deleted}/>
        </div>
        
      );
    });
  }
  return (
      <div className="list-group notes-list">
          {renderedItem}
      </div>
  );
}

export default NoteList;

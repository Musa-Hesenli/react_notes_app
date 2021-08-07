import React from "react";
import SearchFilter from "../features/SearchFilter";
import NoteList from "../List/NoteList";

const RightSide = (props) => {
  console.log(props);
  return (
    <div className="col-md-8 col-lg-9">
      <div className="card rounded-0">
        <div className="notes-card-header">
          <SearchFilter/>
        </div>
      </div>
      <NoteList {...props}/>
    </div>
  );
};

export default RightSide;

import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux with toolkit/filterSlice";
import {
  deleteNote,
  selectFilteredNotes,
} from "../../redux with toolkit/notesSlice";
import OtherFilters from "./OtherFilters";

const NotesList = ({ makeUpdate }) => {
  let renderedItem = "";
  const notes = useSelector(selectFilteredNotes);
  const dispatch = useDispatch();
  if (notes.length === 0) {
    renderedItem = <div className="list-group-item">No item to show</div>;
  } else {
    renderedItem = notes.map((item) => {
      return (
        <Col  key={item.id}>
          <Card>  
            <Card.Body style={{ backgroundColor: item.bg }}>
                <p className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={item.completed ? faCheckCircle : faCircle}
                    className={`${
                      item.completed ? "text-success" : "text-danger"
                    }`}
                    size="2x"
                  />
                  &nbsp; {item.text}
                </p>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-info"
                    onClick={() => makeUpdate(item, true)}
                  >
                    Update
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteNote(item.id))}
                  >
                    Delete
                  </button>
                </div>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }

  const [filter, setFilter] = useState("");
  const filterNotesHandle = (e) => {
    const value = e.target.value;
    setFilter(value);
    dispatch(search(value));
  };

  return (
    <div className="">
      <input
        type="text"
        className="form-control"
        placeholder="Search among your notes..."
        value={filter}
        onChange={(e) => filterNotesHandle(e)}
      />
      <hr />
      <OtherFilters />
      <hr />
      <Row xs={1} md={4} className="g-4">
        {renderedItem}
      </Row>
    </div>
  );
};
export default NotesList;

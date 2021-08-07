import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { statusFilters, changeStatus } from "../../redux with toolkit/filterSlice";
import { markAllCompleted, clearAllCompleted } from "../../redux with toolkit/notesSlice";
import ColorFilterSelector from "./ColorFilterSelector";

export default function OtherFilters() {
  const [showOtherFilters, setShowOtherFilters] = useState(false);
  const dispatch = useDispatch();

  const changeStatusFilter = (e) => {
    dispatch(changeStatus(e.target.value));
  }


  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
            onClick={() => setShowOtherFilters(!showOtherFilters)}
          >
            Other filters
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className={`accordion-collapse collapse ${
            showOtherFilters ? "show" : ""
          }`}
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 mb-2">
                  <ColorFilterSelector/>
              </div>
              <div className="col-12 col-md-6 col-lg-6 mb-2">
                  <label htmlFor="status">Status</label>
                  <select onChange={(e) => changeStatusFilter(e)} name="" id="status" className="form-control">
                    <option value={statusFilters.all}>All</option>
                    <option value={statusFilters.active}>Active</option>
                    <option value={statusFilters.completed}>Completed</option>
                  </select>
              </div>
              <hr />
              <div className="col-12 col-md-6 col-lg-6 mb-2">
                  <button className='btn btn-info btn-block w-100' onClick={() => dispatch(markAllCompleted())} >Mark all Completed</button>
              </div>
              <div className="col-12 col-md-6 col-lg-6 mb-2">
                  <button className='btn btn-info btn-block w-100' onClick={() => dispatch(clearAllCompleted())}>Clear all completed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

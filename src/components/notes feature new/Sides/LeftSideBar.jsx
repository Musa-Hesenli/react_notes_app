import {
  faCheck,
  faCircle,
  faMailBulk,
  faPlus,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColorFilterSelector from "../../notes/ColorFilterSelector";
import React from "react";
import { changeStatus, currentStatus, statusFilters } from '../../../redux with toolkit/filterSlice'
import { useDispatch, useSelector } from "react-redux";


const LeftSideBar = ({ setMenuStatus }) => {

  const dispatch = useDispatch();
  
  const current = useSelector(state => currentStatus(state));  
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card tabs rounded-0">
        <div className="card-body">
          <button className={`btn btn-primary btn-block w-100`} onClick={() => setMenuStatus(true)}>
            Add new note
          </button>
        </div>
        <ul className={`list-group border-0 filter-left rounded-0`}>
          <li className={`list-group-item border-0 filter-left ${current === statusFilters.all ? 'active-tab' : ''}`}  onClick={() => dispatch(changeStatus(statusFilters.all))}>
            <FontAwesomeIcon icon={faMailBulk} className="tab-icon" />
            All notes
          </li>
          <li className={`list-group-item border-0 filter-left ${current === statusFilters.active ? 'active-tab' : ''}`} onClick={() => dispatch(changeStatus(statusFilters.active))}>
            <FontAwesomeIcon icon={faStar} className="tab-icon" />
            Active
          </li>
          <li className={`list-group-item border-0 filter-left ${current === statusFilters.completed ? 'active-tab' : ''}`} onClick={() => dispatch(changeStatus(statusFilters.completed))}>
            <FontAwesomeIcon icon={faCheck} className="tab-icon" />
            Completed
          </li>
          <li className={`list-group-item border-0 filter-left ${current === statusFilters.deleted ? 'active-tab' : ''}`} onClick={() => dispatch(changeStatus(statusFilters.deleted))}>
            <FontAwesomeIcon icon={faTrash} className="tab-icon" />
            Deleted
          </li>
        </ul>
        <div className="list-group border-top-0 tags-list-group">
          <div className="list-group-item title-tags">
            <span>Tags</span>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="list-group-item tag-item">
            <FontAwesomeIcon
              icon={faCircle}
              style={{ color: "#7367f0", marginRight: "10px" }}
            />
            <span>Important</span>
          </div>
          <div className="list-group-item tag-item">
            <FontAwesomeIcon
              icon={faCircle}
              style={{ color: "#e9a91f", marginRight: "10px" }}
            />
            <span>Warning</span>
          </div>
          <div className="list-group-item tag-item">
            <FontAwesomeIcon
              icon={faCircle}
              style={{ color: "#198754", marginRight: "10px" }}
            />
            <span>Success</span>
          </div>
          <div className="list-group-item tag-item">
            <FontAwesomeIcon
              icon={faCircle}
              style={{ color: "#dc3545", marginRight: "10px" }}
            />
            <span>Danger</span>
          </div>
          <div className="list-group-item title-tags mt-4">
            <span>Colors</span>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="list-group-item">
            <ColorFilterSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;

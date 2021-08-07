import { faSearch, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../../redux with toolkit/filterSlice";

const SearchFilter = () => {
  const [filterValue, setFilterValue] = useState('');
  const dispatch = useDispatch();
  
  const handleFilterChange = (e) => {
      setFilterValue(e);
      dispatch(search(e));
  }

  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <FontAwesomeIcon icon={faSearch} size={"xs"} />
      </div>
      <input type="text" className="form-control" placeholder="Search note" value={filterValue} onChange={(e) => handleFilterChange(e.target.value)}/>
      <div className="input-group-append">
        <div style={{ marginRight: "10px" }}>
          <FontAwesomeIcon icon={faSort} />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../redux with toolkit/colors";
import {
  colorFilterChange,
  getSelectedColors,
} from "../../redux with toolkit/filterSlice";

const ColorFilterSelector = () => {
  const allColors = colors;
  const dispatch = useDispatch();
  const selectedColors = useSelector((state) => getSelectedColors(state));

  const handleColorChange = (color) => {
    dispatch(colorFilterChange(color));
  };

  const renderedItems = allColors.map((item) => {
    return (
      <div
        style={{
          border: `${
            selectedColors.indexOf(item) !== -1 ? "3px solid black" : ""
          }`,
          backgroundColor: item,
        }}
        key={item}
        onClick={() => handleColorChange(item)}
      />
    );
  });
  return (
    <React.Fragment>
      <div className="color-selector-container">{renderedItems}</div>
    </React.Fragment>
  );
};

export default ColorFilterSelector;

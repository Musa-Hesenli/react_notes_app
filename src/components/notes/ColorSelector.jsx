import React, { Component } from "react";
import { colors } from "../../redux with toolkit/colors";

class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: colors,
      selectedColor: props.selectedColor ? props.selectedColor : null,
    };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange = (val) => {
    this.setState({
      selectedColor: val,
    });
    this.props.setSelectedColor(val);
  };

  render() {
    const renderedItems = this.state.colors.map((item) => {
      return (
        <div
          style={{
            border: `${
              item === this.state.selectedColor ? "3px solid black" : ""
            }`,
            backgroundColor: item,
          }}
          key={item}
          onClick={() => this.handleColorChange(item)}
        />
      );
    });
    return <div className="color-selector-container">{renderedItems}</div>;
  }
}
export default ColorSelector;

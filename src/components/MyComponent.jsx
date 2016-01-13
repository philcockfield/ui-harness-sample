import React from "react";

const COLOR = {
  red: "#CD3440",
  green: "#A3D26D",
  blue: "#6FA4E1",
};



/**
 * Dummy component.
 */
export default class MyComponent extends React.Component {
  static propTypes = {
    color: React.PropTypes.oneOf(["red", "green", "blue"]),
    text: React.PropTypes.string
  };
  static defaultProps = { color: "blue", text: "My Component" };

  render() {
    return (
      <div style={{
          background: COLOR[this.props.color],
          color: "white",
          borderRadius: 4,
          padding: 40 }}>
        { this.props.text }
      </div>
    );
  }
}

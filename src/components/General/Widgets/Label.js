import React from "react";

const Label = (props) => {
  return (
    <div style={props.labelContainerStyle}>
      <p style={props.labelStyle}>{props.value}:</p>
    </div>
  );
}

export default Label;
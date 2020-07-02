import React from 'react';

const Input = (props) => {
  return (
    <div style={props.labelStyle}>
      <input type={props.type} name={props.name} value={props.value}
             onChange={(event) => {props.onChange(event.target.name.toUpperCase(), event.target.value)}}
             style={props.inputStyle}/>
    </div>
  )
};

export default Input;
import React from 'react';

const Input = (props) => {
  return (
    <div style={props.labelStyle}>
      <input type={props.type} name={props.name} value={props.value} placeholder={props.placeholder}
             onChange={(event) => {props.onChange(event)}}
             style={props.inputStyle} disabled={props.disabled}/>
    </div>
  )
};

export default Input;
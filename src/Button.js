import React from 'react';
import './Button.css';

const Button = (props) => {
  console.log(props);
  const res = props.primary && 'primary';
  return (
    <>
    <div >
    <button className={`button ${res}`} type={props.type} onClick={props.click} {...props}>
      {props.children}
    </button>
    </div>
    </>
  );
};

export default Button;

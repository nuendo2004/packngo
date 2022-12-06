import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      className={props.className}
      ref={ref}
      type="text"
      onChange={props.onInputChange}
      placeholder={props.placeholder}
    />
  );
});

export default Input;

import React from "react";

const Subtract = (props) => {
  const {handleChange} = (props);
  return (<button onClick={handleChange}>Subtract</button>);
};

export default Subtract;

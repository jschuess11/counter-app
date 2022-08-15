import React from "react";

const Add = (props) => {
  const {handleChange} = props
  return (<button onClick={handleChange}>Add</button>);
};

export default Add;

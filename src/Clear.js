import React from "react";

const Clear = (props) => {
  const {handleChange} = props
  return (<button onClick={handleChange}>Clear</button>);
};

export default Clear;

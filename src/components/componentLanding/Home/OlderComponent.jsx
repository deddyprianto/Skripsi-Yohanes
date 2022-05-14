import React, { useDeferredValue } from "react";

const OlderComponent = ({ data }) => {
  const deferedValue = useDeferredValue(data);
  return <div>{JSON.stringify(deferedValue)}</div>;
};

export default OlderComponent;

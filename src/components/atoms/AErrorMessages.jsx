import React from "react";

const AErrorMEssage = ({ children, styleName }) => {
  return (
    <div className={styleName + "text-left text-red-900 pt-2"}>{children}</div>
  );
};

export default AErrorMEssage;

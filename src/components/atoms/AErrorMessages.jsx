import React from "react";
import toCss from "../../mixin/taillwindConver.js";

const AErrorMEssage = ({ children, styleName }) => {
  return (
    <div className={toCss(styleName, "text-left text-red-900 pt-2")}>
      {children}
    </div>
  );
};

export default AErrorMEssage;

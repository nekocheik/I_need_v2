import React from "react";
import { AErrorMEssage, AInput } from "../atoms/atoms.jsx";

const MInput = React.forwardRef(({ name, children, styleName = {} }, ref) => {
  const messages = children;

  return (
    <div className="flex flex-col justify-start w-full mt-6">
      <label className={"font-semibold text-left" + (styleName.label || "")}>
        {name}
      </label>
      <AInput name={name} ref={ref} styleName={styleName.aInput} />
      <AErrorMEssage styleName={styleName.aErrorMEssage}>
        {messages ? messages.props.children : null}
      </AErrorMEssage>
    </div>
  );
});

export default MInput;

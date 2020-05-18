import React from "react";
import { AErrorMEssage, AInput } from "../atoms/atoms.jsx";
import getChildrens from "../../mixin/getChildrens";

const MInput = React.forwardRef(({ name, children, styleName = {} }, ref) => {
  const children = getChildrens(children);
  const messages = children.messages;
  const label = children.label;

  return (
    <div className="flex flex-col justify-start w-full mt-1 relative pb-6">
      <label className={"font-semibold text-left" + (styleName.label || "")}>
        {label}
      </label>
      <AInput name={name} ref={ref} styleName={styleName.aInput} />
      <AErrorMEssage
        styleName={(styleName.aErrorMEssage || "") + "absolute bottom-0"}
      >
        {messages ? messages.props.children : null}
      </AErrorMEssage>
    </div>
  );
});

export default MInput;

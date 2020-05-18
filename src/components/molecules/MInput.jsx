import React from "react";
import useStyleGuild from "../../customHooks/useStyleGuild";
import toCss from "../../mixin/taillwindConver.js";
import { AErrorMEssage } from "../atoms/atoms.jsx";

const MInput = React.forwardRef(({ name, children, styleName = "" }, ref) => {
  const messages = children;

  return (
    <div className="flex flex-col justify-start w-full mt-6">
      <label className="font-semibold text-left">{name}</label>
      <input
        className={toCss(
          "border-2 py-2 pl-3 font-semibold rounded-lg border-primary-color w-full",
          styleName
        )}
        name={name}
        ref={ref}
      />
      <AErrorMEssage>{messages ? messages.props.children : null}</AErrorMEssage>
    </div>
  );
});

export default MInput;

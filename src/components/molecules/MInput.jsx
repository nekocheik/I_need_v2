import React from "react";
import useStyleGuild from "../../customHooks/useStyleGuild";
import toCss from "../../mixin/taillwindConver.js";

const AInput = React.forwardRef(({ name, children, styleName = "" }, ref) => {
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
      {children}
    </div>
  );
});

export default AInput;

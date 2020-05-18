import React from "react";

const AInput = React.forwardRef(({ name, styleName = "" }, ref) => {
  return (
    <input
      className={
        "border-2 py-2 pl-3 font-semibold rounded-lg border-primary-color w-full" +
        styleName
      }
      name={name}
      ref={ref}
    />
  );
});

export default AInput;

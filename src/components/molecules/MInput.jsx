import React from "react";
import useStyleGuild from "../../customHooks/useStyleGuild";

const AInput = ({ name, ref, children, classCss = "" }) => {
  return (
    <div className="flex flex-col justify-start w-full mt-6">
      <label className="font-semibold text-left">{name}</label>
      <input
        className={
          "border-2 py-2 pl-3 font-semibold rounded-lg border-primary-color w-full" +
          " " +
          classCss
        }
        name={name}
        ref={ref}
      />
      {children}
    </div>
  );
};

export default AInput;

import React, { useEffect } from "react";
import useStyleGuild from "../../customHooks/useStyleGuild";

const AButton = ({
  children,
  classCss,
  color = "primary",
  full,
  empty = true,
}) => {
  const defaultStyle = `focus:outline-none focus:shadow-outline border-${color}-color rounded-lg text-${color}-color px-12 py-1 border-3 ${classCss}`;
  const [classTw, styleGuild] = useStyleGuild({
    defaultStyle: defaultStyle,
    empty: {
      state: false,
      style: "bg-transparent",
    },
    full: {
      state: full || null,
      style: `bg-${color} ddfas text-${color}`,
    },
    active: "naruto",
  });

  useEffect(() => {
    console.log(classTw);
  }, classTw);

  return (
    <button
      className={classTw}
      onClick={() => {
        styleGuild("addState", "empty");
      }}
    >
      {children}
    </button>
  );
};

export default AButton;

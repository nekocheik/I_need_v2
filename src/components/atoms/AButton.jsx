import React from "react";
import useStyleGuild from "../../customHooks/useStyleGuild";

const AButton = ({
  children,
  classCss,
  color = "primary",
  full,
  empty = true,
}) => {
  const defaultStyle = `focus:outline-none focus:shadow-outline border-${color}-color rounded-lg text-${color}-color px-12 py-1 border-3 ${classCss}`;
  const [classTw, toogle] = useStyleGuild({
    defaultStyle: defaultStyle,
    empty: {
      state: empty,
      style: "bg-transparent",
    },
    full: {
      state: full,
      style: `bg-${color} text-${color}`,
    },
    active: "naruto",
  });
  setInterval(() => {
    toogle("toogle", "active");
  }, 3000);

  return (
    <button
      className={classTw}
      onClick={() => {
        toogle();
      }}
    >
      {children}
    </button>
  );
};

export default AButton;

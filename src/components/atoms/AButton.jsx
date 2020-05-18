import React, { useEffect } from "react";
import useStyleGuild from "../../customHooks/useStyleGuild";

const AButton = ({
  children,
  styleName = "",
  color = "primary",
  full,
  empty = true,
}) => {
  const defaultStyle = `focus:outline-none focus:shadow-outline border-${color}-color rounded-lg text-${color}-color px-12 py-1 border-3 ${styleName}`;
  const [classTw, styleGuild] = useStyleGuild({
    defaultStyle: defaultStyle,
    empty: {
      state: false,
      style: "bg-transparent",
    },
    full: {
      state: full || null,
      style: `bg-${color}-color text-white`,
    },
  });

  useEffect(() => {
    if (full) {
      styleGuild.add("full");
      styleGuild.remove("empty");
    }
  }, [full]);

  return <button className={classTw}>{children}</button>;
};

export default AButton;

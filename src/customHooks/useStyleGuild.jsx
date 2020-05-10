import react from "react";
import useTailwindStyle from "./tailwindStyle";

export default (objectStyle = {}) => {
  const defaultValue = objectStyle.defaultStyle ? objectStyle.defaultStyle : "";
  delete objectStyle.defaultStyle;
  objectStyle = objectStyle;
  console.log(Object.entries(objectStyle));
  const styleType = Object.entries(objectStyle).find(
    (styleType) => styleType[0].state === true || styleType[1].state === true
  )[1].style;
  return [useTailwindStyle(defaultValue, styleType)];
};

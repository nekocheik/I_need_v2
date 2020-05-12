import toCss from "../mixin/taillwindConver.js";
import { useState, useEffect } from "react";

export default function (objectStyle = {}) {
  let [val, setVal] = useState(
    Object.entries(objectStyle).reduce((a, [currentKey, currentVal]) => {
      let value =
        a && a[1]
          ? {
              [a[0]]: {
                style: a[1].style || a[1],
                state: a[1].state || a[1].state === undefined ? true : false,
              },
            }
          : a;
      value[currentKey] = {
        state:
          currentVal.state || currentVal.state === undefined ? true : false,
        style: currentVal.style || currentVal,
      };
      return value;
    })
  );

  let [_val, _setVal] = useState(null);

  useEffect(() => {
    const valFormatCss = toCss(
      ...Object.entries(val)
        .map(([key, val]) => (val.state ? val.style : false))
        .filter((val) => val)
    );
    _setVal(valFormatCss);
  }, [val]);

  return [_val];
}


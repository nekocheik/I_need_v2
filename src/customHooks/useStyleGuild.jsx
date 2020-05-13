import toCss from "../mixin/taillwindConver.js";
import { useState, useEffect } from "react";

export default function (objectStyle = {}) {
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
      state: currentVal.state || currentVal.state === undefined ? true : false,
      style: currentVal.style || currentVal,
    };
    return value;
  });

  const _setVal = () => {
    return toCss(
      ...Object.entries(val)
        .map(([key, val]) => (val.state ? val.style : false))
        .filter((val) => val)
    );
  };

  function addState(currentKey) {
    let memo = val;
    memo[currentKey].state = true;
    console.log(memo);
    setVal(memo);
  }

  function action(action, playload) {
    switch (action) {
      case "addState":
        addState(playload);
        break;

      default:
    }
  }

  return [_setVal, action];
}

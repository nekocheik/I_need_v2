import toCss from "../mixin/taillwindConver.js";
import { useState, useEffect } from "react";

export default function (fallbackValue) {
  const [_valDefault, _setValDefault] = useState(
    Object.entries(fallbackValue).reduce((a, [currentKey, currentVal]) => {
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

  const [_val, _setVal] = useState();

  useEffect(() => {
    _setVal(
      toCss(
        ...Object.entries(_valDefault)
          .map(([key, val]) => (val.state ? val.style : false))
          .filter((val) => val)
      )
    );
    console.log(_valDefault);
  }, [_valDefault]);

  return [
    _val,
    {
      push: (stateName, classNames) => {
        let memo = _valDefault;
        memo[stateName] = {
          state: classNames.state ? classNames.state : false,
          style: classNames.style ? classNames.style : classNames,
        };
        _setValDefault(memo);
      },
      add: (styleName) => {
        let memo = Object.assign({}, _valDefault);
        memo[styleName].state = true;
        _setValDefault(memo);
      },
      remove: (styleName) => {
        let memo = Object.assign({}, _valDefault);
        memo[styleName].state = false;
        _setValDefault(memo);
      },
      toogle: (styleName) => {
        let memo = Object.assign({}, _valDefault);
        memo[styleName].state = memo[styleName].state ? false : true;
        _setValDefault(memo);
      },
    },
  ];
}

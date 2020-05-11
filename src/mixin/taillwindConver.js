const ArrayToString = (value) => {
  return Array.isArray(value) ? value.join(" ") : value;
};

const tailwindStyle = (...restArgs) => {
  return [
    restArgs.reduce((acu, current) => {
      return ArrayToString(acu) + " " + ArrayToString(current);
    }),
  ];
};

export default tailwindStyle;

import React from "react";

const PageWrap = (props) => {
  return (
    <div
      className="w-10/12 mt-5 min-h-screen self-center bg-white"
      Style="box-shadow: 0px 3px 6px #00000029"
    >
      {props.children}
    </div>
  );
};

export default PageWrap;

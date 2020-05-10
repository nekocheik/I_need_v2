import React from "react";
import PageWrap from "../components/layouts/PageWrap";
import CatchPhrase from "../components/layouts/CatchPhrase";
const SingIn = () => {
  return (
    <div className="flex w-full flex-row min-h-screen">
      <div id="form_singUp" className="w-1/2"></div>
      <CatchPhrase />
    </div>
  );
};

export default SingIn;

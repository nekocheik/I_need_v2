import React from "react";
import PageWrap from "../components/layouts/PageWrap";
import CatchPhrase from "../components/layouts/CatchPhrase";
import AButton from "../components/atoms/AButton";
import useApi from "../mixin/ApiRequest";
import SingIn from "../components/layouts/SingIn";
import SingUp from "../components/layouts/SingUp";

import { useParams, useHistory } from "react-router-dom";

const Log = () => {
  const { type } = useParams();
  const history = useHistory();

  const BlockForm = () => {
    if (type === "singin") {
      return <SingIn />;
    } else if (type === "singup") {
      return <SingUp />;
    } else {
      history.push("/");
    }
  };

  return (
    <div className="flex flex-row w-full min-h-screen">
      <div id="form_singUp" className="relative w-full px-24">
        <p className="text-3xl font-bold font-Assistant pt-24">
          OPEN AN ACCOUNT
        </p>
        <BlockForm />
      </div>
      <CatchPhrase />
    </div>
  );
};

export default Log;

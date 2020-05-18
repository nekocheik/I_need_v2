import React from "react";
import { AButton } from "../components/atoms/atoms";
import useApi from "../mixin/ApiRequest";
import { useParams, useHistory } from "react-router-dom";
import {
  PageWrap,
  CatchPhrase,
  SingIn,
  SingUp,
} from "../components/layouts/layouts";

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
    <div className="flex flex-row w-full h-90">
      <div id="form_singUp" className="relative w-full md:px-10 lg:px-16">
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

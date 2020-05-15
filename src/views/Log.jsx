import React from "react";
import PageWrap from "../components/layouts/PageWrap";
import CatchPhrase from "../components/layouts/CatchPhrase";
import { useForm } from "react-hook-form";
import Input from "../components/molecules/MInput";
import AButton from "../components/atoms/AButton";
import { path, url, Route, Switch, useRouteMatch } from "react-router-dom";

const SingIn = () => {
  let { path, url } = useRouteMatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const SingUP = () => {
    return (
      <form className="w-full p-2" onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="Email"
          classCss="bg-quaternary-color"
          ref={register({ required: true })}
        >
          {errors.lastname && "Last name is required."}
        </Input>
        <Input
          classCss="bg-quaternary-color"
          name="Password"
          ref={register({ required: true })}
        >
          {errors.lastname && "Last name is required."}
        </Input>
        <Input
          classCss="bg-quaternary-color"
          name="Confirm Password"
          ref={register({ required: true })}
        >
          {errors.lastname && "Last name is required."}
        </Input>
        <span className="block mt-10">
          <AButton classCss="w-full py-2" className="my-8" full={true}>
            Sign up
          </AButton>
        </span>
      </form>
    );
  };

  return (
    <div className="flex flex-row w-full min-h-screen">
      <div id="form_singUp" className="relative w-full px-24">
        <p className="text-3xl font-bold font-Assistant pt-24">
          OPEN AN ACCOUNT
        </p>
        <Switch>
          <SingUP />
        </Switch>
      </div>
      <CatchPhrase />
    </div>
  );
};

export default SingIn;

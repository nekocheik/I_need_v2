import React from "react";
import PageWrap from "../components/layouts/PageWrap";
import CatchPhrase from "../components/layouts/CatchPhrase";
import { useForm } from "react-hook-form";
import Input from "../components/molecules/MInput";
import AButton from "../components/atoms/AButton";

const SingIn = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-row w-full min-h-screen">
      <div
        id="form_singUp"
        className="flex flex-col justify-center w-full px-24"
      >
        <p className="text-3xl font-bold font-Assistant">OPEN AN ACCOUNT</p>
        <form className="w-full p-2" onSubmit={handleSubmit(onSubmit)}>
          <Input name="lastname" ref={register({ required: true })}>
            {errors.lastname && "Last name is required."}
          </Input>
          <Input name="lastname" ref={register({ required: true })}>
            {errors.lastname && "Last name is required."}
          </Input>
          <span className="mt-10 block">
            <AButton classCss="w-full" className="my-8" full={true}>
              Sign up
            </AButton>
          </span>
        </form>
      </div>
      <CatchPhrase />
    </div>
  );
};

export default SingIn;

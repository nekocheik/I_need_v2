import React from "react";
import Input from "../molecules/MInput";
import { useForm } from "react-hook-form";
import AButton from "../atoms/AButton";

const SingIn = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
        name="Confirm Password"
        ref={register({ required: true })}
      >
        {errors.lastname && "Last name is required."}
      </Input>
      <span className="block mt-10">
        <AButton classCss="w-full py-2" className="my-8" full={true}>
          Sign in
        </AButton>
      </span>
    </form>
  );
};

export default SingIn;

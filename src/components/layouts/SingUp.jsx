import React from "react";
import Input from "../molecules/MInput";
import AButton from "../atoms/AButton";
import { useForm } from "react-hook-form";

const SingUP = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, c) => {
    console.log(data, c, this);
  };

  return (
    <form
      className="w-full p-2"
      onSubmit={(e) => {
        handleSubmit((a) => onSubmit(e, a));
      }}
    >
      <Input
        name="Email"
        classCss="bg-quaternary-color"
        ref={register({ required: true })}
      >
        {errors.lastname && "Last name is required."}
      </Input>
      <input type="text" name="mail" />
      <Input
        classCss="bg-quaternary-color"
        name="Password"
        ref={register({ required: true })}
      >
        dsfadsafdsafdasfasf
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

export default SingUP;

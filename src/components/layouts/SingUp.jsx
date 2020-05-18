import React from "react";
import MInput from "../molecules/MInput";
import AButton from "../atoms/AButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SingUP = ({ props }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form className="w-full p-2" onSubmit={handleSubmit(onSubmit)}>
        <MInput
          name="Email"
          styleName="bg-quaternary-color"
          ref={register({ required: true })}
        >
          <slot name="messages">{errors.Email && "Field email required."}</slot>
        </MInput>
        <MInput
          styleName="bg-quaternary-color"
          name="Password"
          ref={register({ required: true })}
        >
          <slot name="messages">{errors.Email && "Field email required."}</slot>
        </MInput>
        <MInput
          styleName="bg-quaternary-color"
          name="Confirm Password"
          ref={register({ required: true })}
        >
          <slot name="messages">{errors.Email && "Field email required."}</slot>
        </MInput>
        <span className="block mt-10">
          <AButton styleName="w-full py-2" className="my-8" full={true}>
            Sign in
          </AButton>
        </span>
      </form>
      <p className="pt-3">
        Already have an account ?{" "}
        <Link to="/Log/singin">
          <span className="text-secondary-color font-semibold cursor-pointer">
            Log in
          </span>
        </Link>
      </p>
    </>
  );
};

export default SingUP;

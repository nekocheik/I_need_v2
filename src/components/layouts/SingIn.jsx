import React from "react";
import MInput from "../molecules/MInput";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AButton from "../atoms/AButton";

const SingIn = () => {
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
        No account yet? Sign up{" "}
        <Link to="/Log/singup">
          <span className="text-secondary-color font-semibold cursor-pointer">
            Log in
          </span>
        </Link>
      </p>
    </>
  );
};

export default SingIn;

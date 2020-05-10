import React from "react";
import AButton from "../atoms/AButton";

const NavBarre = () => {
  return (
    <div className="py-4 w-10/12 md:w-5/12 float-right flex justify-evenly m-auto">
      <AButton color={"secondary"}>Log in</AButton>
      <AButton>Sign up</AButton>
    </div>
  );
};

export default NavBarre;

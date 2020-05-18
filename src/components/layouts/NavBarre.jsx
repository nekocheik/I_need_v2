import React from "react";
import { AButton } from "../atoms/atoms";

const NavBarre = () => {
  return (
    <div className="py-4 w-full flex justify-end">
      <AButton styleName="mr-10" color={"secondary"}>
        Log in
      </AButton>
      <AButton styleName="mr-24">Sign up</AButton>
    </div>
  );
};

export default NavBarre;

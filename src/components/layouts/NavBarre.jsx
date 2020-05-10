import React from "react";
import AButton from "../atoms/AButton";

const NavBarre = () => {
  return (
    <div className="py-4 w-full flex justify-end">
      <AButton classCss="mr-10" color={"secondary"}>
        Log in
      </AButton>
      <AButton classCss="mr-24">Sign up</AButton>
    </div>
  );
};

export default NavBarre;

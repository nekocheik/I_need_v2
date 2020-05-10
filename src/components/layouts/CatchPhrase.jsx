import React from "react";
import backgroundImage from "../../assets/images/logPages/mapBlue.png";

const catchPhrase = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + backgroundImage + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "120% auto",
        backgroundPositionX: "-50px",
        backgroundPositionY: "center",
      }}
      className="text-4xl font-Assistant font-semibold text-left p-6 py-32 uppercase m-auto h-screen items-stretch w-1/2 bg-tertiaire-color"
    >
      <h1 className="text-secondary-color">
        Travel easily with chronic illness{" "}
      </h1>
      <h2 className="text-white">
        Find a specialist, a hospital, a place to get your medication.
      </h2>
    </div>
  );
};

export default catchPhrase;

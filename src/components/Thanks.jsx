import React from "react";
import illustration from "../assets/illustration-thank-you.svg";

const Thanks = ({ rating }) => {
  return (
    <div className="bg-slate-900 flex justify-center items-center min-h-screen">
      <div className="bg-slate-800 w-80 md:w-100 p-10 rounded-2xl">
        <div className="flex justify-center items-center mb-6">
          <img src={illustration} alt="Star" />
        </div>
        <div className="text-center text-sm font-bold p-2 my-3 text-orange-500 bg-slate-700 rounded-full">
          You selected {rating} out of 5
        </div>
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-bold text-white mb-3">
            Thank you!
          </h1>
          <p className="text-slate-300 text-sm md:text-md leading-6">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thanks;

import React, { useState } from "react";
import starIcon from "../assets/icon-star.svg";
import caution from "../assets/caution.svg";

const Rating = ({ rating, setRating, setSubmitted }) => {
  const [error, setError] = useState(false);
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="bg-slate-900 flex justify-center items-center min-h-screen">
      <div className="bg-slate-800 w-100 p-10 rounded-2xl">
        <div className="h-[2.5rem] w-[2.5rem] bg-slate-600 rounded-full flex justify-center items-center mb-6">
          <img src={starIcon} alt="Star" />
        </div>
        <h1 className="text-xl md:text-3xl font-bold text-white mb-3">
          How did we do?
        </h1>
        <p className="text-slate-300 text-sm md:text-md leading-6">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex justify-between mt-3">
          {numbers.map((number) => {
            return (
              <button
                key={number}
                onClick={() => setRating(number)}
                className={`bg-slate-700 h-[3rem] w-[3rem] rounded-full font-medium text-slate-300 cursor-pointer transition ${rating === number ? "text-slate-800 bg-white" : "bg-orange-500 text-white cursor-pointer hover:bg-white hover:text-slate-800"} focus:outline-dashed outline-white outline-offset-4 active:scale-95`}
              >
                {number}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => {
            if (rating === null) {
              setError(true);
              return;
            }

            setError(false);
            setSubmitted(true);
          }}
          className="block px-6 py-2 mt-4 uppercase tracking-wider text-md md:text-lg font-bold w-full rounded-full transition text-slate-80 bg-orange-500 text-white cursor-pointer hover:bg-white hover:text-slate-800 focus:outline-dashed outline-white outline-offset-4 active:scale-95"
        >
          Submit
        </button>
        {error && (
          <div className="flex justify-center items-center gap-3 mt-3 bg-red-200 text-center p-1 rounded-full w-full text-red-500 text-sm">
            <img className="w-3 block" src={caution} alt="" />
            Please select a rating
          </div>
        )}
      </div>
    </div>
  );
};

export default Rating;

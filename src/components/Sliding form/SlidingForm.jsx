import React, { useState } from "react";
import SignInForm from "../Login/SignInForm";
import SignUpForm from "../Register/SignUpForm";

const SlidingForm = () => {
  const [side, setSide] = useState(true);

  const toggleForm = () => setSide(!side);

  return (
    <>
      <div className="my-32 relative h-[400px] border-2 border-green-300 shadow-lg rounded-2xl max-w-[700px] sm:mx-auto mx-1 overflow-hidden">
        <div
          className={`border-red-500 h-full w-1/2 z-10 absolute ${
            side ? "translate-x-[100%]" : "translate-x-[0%]"
          } duration-200`}
        >
          <div
            className={`absolute h-full bg-green-500 ${side ? "z-0" : "z-20"}`}
          >
            <div className="flex justify-center items-center flex-col h-full p-5">
              <h1 className="text-2xl font-semibold py-3 text-white">
                Welcome Back!
              </h1>
              <p className="text-white">
                If you already have an account, please sign in to continue.
              </p>
              <button
                className="text-[15px] font-bold border-2 py-1 px-6 bg-white text-green-500 duration-100 mt-8 hover:bg-green-500 hover:text-white hover:border-white rounded-md"
                onClick={toggleForm}
              >
                SIGN IN
              </button>
            </div>
          </div>
          <div
            className={`absolute h-full bg-green-500 ${side ? "z-20" : "z-0"}`}
          >
            <div className="flex justify-center items-center flex-col h-full p-5">
              <h1 className="text-2xl font-semibold py-3 text-white">
                Hello, Friend!
              </h1>
              <p className="text-white">
                We are so happy to have you here. Enter your personal details
                and start your journey with us.
              </p>
              <button
                className="text-[15px] font-bold border-2 py-1 px-6 bg-white text-green-500 duration-100 mt-8 hover:bg-green-500 hover:text-white hover:border-white rounded-md"
                onClick={toggleForm}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className={`w-1/2 h-full duration-200 flex justify-center items-center ${
            side ? 'translate-x-[0%]' : 'translate-x-[210%]'
          }`}>
            <SignInForm />
          </div>
          <div className={`w-1/2 h-full duration-200 flex justify-center items-center ${
            side ? 'translate-x-[-210%]' : 'translate-x-[0%]'
          }`}>
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SlidingForm;

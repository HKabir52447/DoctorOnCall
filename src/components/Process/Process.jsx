import React from "react";

const Process = () => {
  return (
    <div>
      <ul className="timeline timeline-vertical md:timeline-horizontal overflow-auto">
        <li>
          <div className="timeline-start timeline-box">
            <h4 className="flex justify-center items-center text-center w-[30px] h-[30px] mx-auto mb-1 rounded-full bg-violet-500 text-white font-semibold">1</h4>
            <img
              className="w-[200px] rounded-md"
              src="https://static.vecteezy.com/system/resources/thumbnails/003/689/224/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
              alt=""
            />
            <h2 className="text-center font-semibold bg-green-300 my-1">
              Sign in your account
            </h2>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-green-500 h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr className="bg-green-300" />
        </li>
        <li>
          <hr className="bg-green-300" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-green-500 h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">
          <h4 className="flex justify-center items-center text-center w-[30px] h-[30px] mx-auto mb-1 rounded-full bg-violet-500 text-white font-semibold">2</h4>
            <img
              className="w-[200px] rounded-md"
              src="https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148553008.jpg"
              alt=""
            />
            <h2 className="text-center font-semibold bg-green-300 my-1">
              Book your appointment
            </h2>
          </div>
          <hr className="bg-green-300" />
        </li>
        <li>
          <hr className="bg-green-300" />
          <div className="timeline-start timeline-box">
          <h4 className="flex justify-center items-center text-center w-[30px] h-[30px] mx-auto mb-1 rounded-full bg-violet-500 text-white font-semibold">3</h4>
            <img
              className="w-[200px] rounded-md"
              src="https://st2.depositphotos.com/14490296/42328/v/450/depositphotos_423281598-stock-illustration-online-consultation-via-smartphone-doctor.jpg"
              alt=""
            />
            <h2 className="text-center font-semibold bg-green-300 my-1">
              Consult your doctor
            </h2>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-green-500 h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr className="bg-green-300" />
        </li>
        <li>
          <hr className="bg-green-300"/>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">
          <h4 className="flex justify-center items-center text-center w-[30px] h-[30px] mx-auto mb-1 rounded-full bg-violet-500 text-white font-semibold">4</h4>
            <img
              className="w-[200px] rounded-md"
              src="https://thumbs.dreamstime.com/b/online-prescription-system-abstract-concept-vector-illustration-medical-electronic-prescribing-pharmacy-e-digital-request-metaphor-206062043.jpg"
              alt=""
            />
            <h2 className="text-center font-semibold bg-green-300 my-1">
              Get digitalize prescription
            </h2>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Process;

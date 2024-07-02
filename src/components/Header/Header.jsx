import React from "react";

const Header = () => {
  return (
    <div className="hero bg-slite-100 pt-3 pb-20">
      <div className="md:flex flex-row-reverse max-w-[1240px] gap-5 mx-auto items-center px-3">
        <img
          src="https://img.freepik.com/free-vector/online-doctor-flat-design_23-2148521415.jpg?t=st=1717571977~exp=1717575577~hmac=5cea3bfe246025976f347c1361e3eec19a48ddc340083f296ce5f0a88339e448&w=740"
          className="md:max-w-sm rounded-lg shadow-xl w-[90%] mx-auto mt-2 mb-4"
        />
        <div className="py-5 mb-4 md:max-w-[55%] mx-3">
          <h1 className="text-2xl md:text-5xl font-bold">
            Welcome to DoctorOnCall
          </h1>
          <p className="py-6">
            Discover the future of healthcare with DoctorOnCall, your trusted
            platform for convenient and reliable medical consultations. Whether
            you're seeking expert advice, need to book an appointment, or prefer
            a virtual consultation from the comfort of your home, we have you
            covered. With DoctorOnCall, you can easily find doctors based on their
            specialties, read patient reviews, and choose the right expert for
            your needs. Join us today and take the first step towards a
            healthier, more connected future.
          </p>
          <button className="text-[17px] font-bold border-2 border-green-400 py-1 px-6 hover:bg-green-500 hover:text-white duration-100 hover:border-transparent">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

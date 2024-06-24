import React from "react";
import {
  FaUser,
  FaMedal,
  FaHouseMedicalCircleCheck,
  FaGraduationCap,
} from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { PiShieldStarFill } from "react-icons/pi";
import "./Doctors.css";
import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    <>
      <div className="p-5 doctor border-2 border-green-200 shadow-md bg-white">
        <h2 className="before_elem font-bold bg-green-500 w-[50%] py-1 text-white">
          Medicine
        </h2>
        <div className="header flex justify-between">
          <div className="profile_img">
            <div className="d_img">
              <div className="border-rotate">

              </div>
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="inline-block"
                alt=""
              />
            </div>
            <div className="rated flex items-center">
              <FaMedal className="text-green-500 mr-2" />
              <h2>Top Rated</h2>
            </div>
          </div>
          <div className="profile_info pt-3">
            <div className="name flex items-center mb-1">
              <FaUser className="text-green-500 mr-2" />
              <h2 className="font-bold">Dr. Abdul Hamid Rana</h2>
            </div>
            <div className="designation flex items-center mb-1">
              <MdWorkHistory className="text-green-500 mr-2" />
              <h2>Associate professor</h2>
            </div>
            <div className="dept flex items-center mb-1">
              <BsFillFileEarmarkMedicalFill className="text-green-500 mr-2" />
              <h2>Medicine</h2>
            </div>
            <div className="degree flex items-center mb-1">
              <FaGraduationCap className="text-green-500 mr-2" />
              <h2>Dhaka Medical College</h2>
            </div>
          </div>
        </div>
        <div className="body flex justify-center py-3 items-center">
          <PiShieldStarFill className="text-green-500 mr-2 text-xl" />
          <h2>5 years of experience</h2>
        </div>
        <div className="footer flex items-center">
          <FaHouseMedicalCircleCheck className="text-green-500 text-2xl" />
          <h2>Dhaka Medical College Hospital</h2>
        </div>
        <div className="button flex justify-end">
          <Link to="/doctor-details" className="text-[15px] font-bold border-2 border-green-400 py-1 px-6 hover:bg-green-500 hover:text-white duration-100 hover:border-transparent mt-8 border-r-transparent hover:border-r-white">
            View Profile
          </Link>
          <Link to="/doctor-details" className="text-[15px] font-bold border-2 border-transparent py-1 px-6 bg-green-500 text-white duration-100 mt-8 hover:bg-white hover:text-black hover:border-green-500">
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
};

export default Doctors;

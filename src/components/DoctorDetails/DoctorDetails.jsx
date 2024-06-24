import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaMedal,
  FaHouseMedicalCircleCheck,
  FaGraduationCap,
  FaCalendarCheck,
} from "react-icons/fa6";
import { TbCoinTakaFilled } from "react-icons/tb";
import { MdWorkHistory } from "react-icons/md";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { PiShieldStarFill } from "react-icons/pi";

const DoctorDetails = () => {
  return (
    <>
      <div className="p-5 bg-white lg:w-[85%] mx-auto my-8">
        <div className="md:flex justify-center items-center gap-10">
          <div className="doc_profile md:w-1/2 mb-4 relative">
            <div className="doc_img border-2 p-5 rounded-lg rounded-tl-none">
              <h3 className="py-1 bg-green-500 w-[100px] text-white text-center absolute -top-8 left-0 rounded-t-xl">Medicine</h3>
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="inline-block w-full rounded-md"
                alt=""
              />
              <h2 className="font-bold py-3 text-center text-green-500">
                Dr. Abdul Hamid Rana
              </h2>
              <div className="flex justify-between mb-1">
                <div className="designation flex items-center mb-1">
                  <MdWorkHistory className="text-green-500 mr-2" />
                  <h2>Associate professor</h2>
                </div>
                <div className="dept flex items-center mb-1">
                  <BsFillFileEarmarkMedicalFill className="text-green-500 mr-2" />
                  <h2>Medicine</h2>
                </div>
              </div>
              <div className="footer flex items-center justify-center">
                <FaHouseMedicalCircleCheck className="text-green-500 text-2xl" />
                <h2>Dhaka Medical College Hospital</h2>
              </div>
              <div className="flex justify-center">
                <Link
                  to="/doctor-details"
                  className="text-[15px] font-bold border-2 border-transparent py-1 px-6 bg-green-500 text-white duration-100 mt-8 hover:bg-white hover:text-black hover:border-green-500"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="mb-4">
              <span className="font-semibold">Dr. Abdul Hamid Rana</span> is one
              of the renowned Internal Medicine specialists from Dhaka Medical
              College Hospital and has now joined Shaheed AhsanUllah Master
              General Hospital, Tongi, Gazipur. He has 17 years of experience in
              his profession and has achieved his degrees of MBBS, BCS (Health),
              FCPS (Medicine), and MD (Internal Medicine—BSMMU). Dr. Md. Khyrul
              Kabir Razib practice chamber is situated at LABAID Specialized
              Hospital, House No. 06, Road No. 04, Dhaka-1205, Bangladesh.
            </p>
            <div className="py-3 flex justify-between">
              <div className="flex py-2 flex-col">
                <div className="mb-4">
                  <div className="flex">
                    <FaGraduationCap className="text-green-500 mr-2 text-2xl" />
                    <h2 className="font-semibold">Degrees and Trainings</h2>
                  </div>
                  <p className="text-sm pl-6">
                    MBBS, M.Phil, MD(Psychiatry)
                  </p>
                </div>
                <div className="mb-2">
                  <div className="flex">
                    <PiShieldStarFill className="text-green-500 mr-2 text-2xl" />
                    <h2 className="font-semibold">Years of Experience</h2>
                  </div>
                  <p className="text-sm pl-6">5 years+</p>
                </div>
              </div>
              <div className="flex py-2 flex-col">
                <div className="mb-4">
                  <div className="flex">
                    <FaCalendarCheck className="text-green-500 mr-2 text-2xl" />
                    <h2 className="font-semibold">Visitation Day</h2>
                  </div>
                  <p className="text-sm pl-6">Sun,Tue,Thur</p>
                </div>
                <div className="flex">
                  <div className="mb-2">
                    <div className="flex">
                      <TbCoinTakaFilled className="text-green-500 mr-2 text-2xl" />
                      <h2 className="font-semibold">Consultation Fee</h2>
                    </div>
                    <p className="text-sm pl-6">
                      New Patient 1000 TK
                      <br />
                      Old Patient 700 TK
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;

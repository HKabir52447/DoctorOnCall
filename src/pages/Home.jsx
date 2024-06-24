import React from "react";
import Header from "../components/Header/Header";
import Feature from "../components/Features/Feature";
import Title from "../components/Title/Title";
import Departments from "../components/Departments/Departments";
import Doctors from "../components/Doctors/Doctors";
import Testimonial from "../components/Testimonials/Testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-purple-100 via-indigo-300 to-purple-100">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center mb-[30px] md:h-auto py-4">
          <Feature />
          <Feature />
          <Feature />
          <Feature />
        </div>
      </div>
      <div className="max-w-[992px] mx-auto pb-8 text-center">
        <Title sub_title="Department" title="Our Services" />
        <div className="flex flex-wrap gap-5 justify-center">
          <Departments />
          <Departments />
          <Departments />
          <Departments />
          <Departments />
          <Departments />
          <Departments />
          <Departments />
        </div>
        <button className="text-[17px] font-bold border-2 border-green-400 py-1 px-6 hover:bg-green-500 hover:text-white duration-100 hover:border-transparent mt-8">
          See More
        </button>
      </div>
      <div className="max-w-[1240px] mx-auto pb-8 text-center">
        <Title sub_title="Doctors" title="Top Rated Doctors" />
        <div className="flex flex-wrap gap-x-5 gap-y-12 justify-center">
          <Doctors />
          <Doctors />
          <Doctors />
          <Doctors />
          <Doctors />
          <Doctors />
        </div>
        <button className="text-[17px] font-bold border-2 border-green-400 py-1 px-6 hover:bg-green-500 hover:text-white duration-100 hover:border-transparent mt-8">
          See More
        </button>
      </div>
      <Title sub_title="Reviews" title="Testimonials"/>
      <div className="mb-10 bg-gradient-to-r from-indigo-300 via-purple-100 to-indigo-300 mx-auto">
        <Testimonial />
      </div>
    </>
  );
};

export default Home;

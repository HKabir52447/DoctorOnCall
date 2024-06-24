import React from "react";
import Slider from 'react-slick';
import '../Testimonials/Testimonial.css';


const testimonials = [
  {
    name: "John Doe",
    quote: "This service is fantastic! Highly recommended.",
    position: "CEO, Company Inc."
  },
  {
    name: "Jane Smith",
    quote: "A wonderful experience from start to finish.",
    position: "CTO, Tech Solutions"
  },
  {
    name: "Sam Johnson",
    quote: "Professional and efficient. Will use again.",
    position: "Manager, Business Corp"
  }
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 pb-6">
            <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-[80px] h-[80px] rounded-full border-4 border-green-500 mx-auto profile"
        />
            <div className="rounded-lg p-6 text-center border-2 bg-white">
            
            <h5 className="text-gray-900 font-bold pt-4">{testimonial.name}</h5>
              <p className="text-gray-700 mb-2">{testimonial.quote}</p>
              <div>
                ratings......
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;

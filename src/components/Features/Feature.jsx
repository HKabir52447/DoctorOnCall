import React, { useState } from 'react'
import CountUp from 'react-countup'

const Feature = ({bgColor}) => {
  return (
    <div className='md:translate-y-[-70px] mx-5'>
        <div className={`${bgColor} text-white rounded-2xl feature shadow-lg border w-[150px] h-[150px] flex flex-col justify-center items-center`}>
           <h1 className='text-5xl font-bold'>
           <CountUp end={100} duration={2}/>+
            </h1>
            
            <p className='py-3 font-bold'>Video consultancy</p>
        </div>
    </div>
  )
}

export default Feature
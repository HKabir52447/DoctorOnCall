import React from 'react'
import featureImg from '../../assets/feature-conf.png';

const Feature = () => {
  return (
    <div className='md:translate-y-[-60px] mx-5'>
        <div className="rounded-lg feature shadow-xl bg-red-100 w-[150px] h-[150px] flex flex-col justify-center items-center">
            <img src={featureImg} alt="" />
            <p className='py-3 font-bold'>Video consultancy</p>
        </div>
    </div>
  )
}

export default Feature
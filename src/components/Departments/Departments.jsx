import React from 'react'
import deptImg from '../../assets/connect.png';

const Departments = () => {
  return (
    <div>
        <div className="department text-center border-red-300 border-2 w-[150px] h-[150px] p-5">
            <img src={deptImg} alt="" className='block mx-auto'/>
            <h2 className='text-xl pt-3'>Medicine</h2>
        </div>
    </div>
  )
}

export default Departments
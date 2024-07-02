import React from 'react'

const Title = (props) => {
  const {sub_title, title} = props;
  return (
    <div className='text-center mx-auto'>
        <h4 className='text-[10px] bg-green-100 font-medium mt-3 py-1 inline-block px-5'>{sub_title}</h4>
        <h1 className='text-3xl text-green-500 pb-8 font-semibold'>{title}</h1>
    </div>
  )
}

export default Title
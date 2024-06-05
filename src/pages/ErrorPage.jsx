import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='text-center'>
        <h1 className='text-5xl text-red-600 pt-24'>404 page</h1>
        <Link to="/" className="mt-20 btn btn-outline btn-primary">Go To Home</Link>
    </div>
  )
}

export default ErrorPage
import React from 'react'
import RequestForm from './RequestForm'
import Banner from '../assets/Banner.jpg'

function Main() {
  return (
    <div className='bg-gray-700'>
      <div className='w-full h-[70vh] overflow-hidden '>
        <img src={Banner} alt="Ride On Banner" className='w-full h-full object-cover'/>
      </div>
      <p className='text-white font-semibold pt-3 mx-auto text-center'>
        Ride On is dedicated to providing  reliable and user-friendly platform to request and manage rides</p>
      <RequestForm />
    </div>
  );
}

export default Main

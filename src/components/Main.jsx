import React from 'react'
import RequestForm from './RequestForm'
import RideOnbanner from '../assets/RideOnbanner.jpg'

function Main() {
  return (
    <div>
      <div className='w-full h-[70vh] overflow-hidden'>
        <img src={RideOnbanner} alt="Ride On Banner" />
      </div>
      <RequestForm />
    </div>
  );
}

export default Main

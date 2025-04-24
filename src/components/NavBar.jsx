import React from 'react'

function NavBar() {
  return (
      <nav className="bg-black text-white ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="text-xl">RIDE ON</h1>
          <ul className='text-lg'>
            <li>
              <a href="" className="">
                Home
              </a>
            </li>
            <li>
              <a href="" className="">
                View Requests
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default NavBar
import React from 'react'

function NavBar() {
  return (
    <nav className="bg-black text-white font-bold">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="text-xl font-poppins">RIDE ON</h1>
        <ul className="text-lg flex gap-6 ">
          <li>
            <a href="" className="font-poppins hover:text-violet-800">
              Home
            </a>
          </li>
          <li>
            <a href="" className="font-poppins hover:text-violet-800">
              View Requests
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar
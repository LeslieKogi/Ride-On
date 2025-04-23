import React from 'react'

function NavBar() {
  return (
    <div>
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1>RIDE ON</h1>
          <ul>
            <li> 
              <a href="" className="">Home</a>
            </li>
            <li>
              <a href="" className="">View Requests</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar
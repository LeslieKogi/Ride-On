import React from 'react'

function SearchBar({search, setSearch,filterRequests}) {
  
  return (
    <div>
        <input onClick={filterRequests} value={search} onChange={(e)=>setSearch(e.target.value)}
        className="border p-2 ml-5 mb-3 border-black rounded mt-3 " placeholder='search by destination'/>
    </div>
  )
}
export default SearchBar

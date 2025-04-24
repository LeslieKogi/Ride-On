import React from "react";

function RequestCard({requests}){
    const requestList=requests.map ((request)=>{
        return (
          <div key={request.id} className="border ml-5 mr-5 py-4 p bg-indigo-400 rounded-md">
            <h1>Name:{request.first_name}</h1>
            <p>{request.pickup}</p>
            <p>{request.destination}</p>
            <p>{request.number_of_passangers}</p>
            <button className="bg-blue-500 p-2 border border-black rounded-md m-3">Cancel</button>
            <button className="bg-red-500 p-2 border border-black rounded-md m-3">Report</button>
          </div>
        );
    })

    return(
    <>
    {requestList}
    </>)
}
export default RequestCard
import React from "react";

function RequestCard({requests}){
    const requestList=requests.map ((request)=>{
        return (
          <div key={request.id}>
            <h1>Name:{request.first_name}</h1>
            <p>{request.pickup}</p>
            <p>{request.destination}</p>
            <p>{request.number_of_passangers}</p>
            <button>Cancel</button>
            <button>Report</button>
          </div>
        );
    })

    return(
    <>
    {requestList}
    </>)
}
export default RequestCard
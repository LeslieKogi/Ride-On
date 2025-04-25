import React from "react";

function RequestCard({requests,handleCancel}){
  
  function handleReport(){
    console.log ("Reported")
  }

    const requestList=requests.map ((request)=>{
        return (
          <div key={request.id} className="border ml-5 mr-5 py-4 p bg-slate-800 rounded-md text-white p-3">
            <p className="font-medium">Name  {request.name}</p>
            <p className="font-medium">Pickup point {request.pickup}</p>
            <p className="font-semibold text-lg">Destination {request.destination}</p>
            <p className="text-red-400">Number of passengers {request.number_of_passangers}</p>
            <button onClick={()=>handleCancel(request.id)} className="bg-stone-600 p-2 border border-black rounded-md m-3">Cancel</button>
            <button onClick={handleReport} className="bg-red-500 p-2 border border-black rounded-md m-3">Report</button>
          </div>
        );
    })

    return(
    <>
    {requestList}
    </>)
}
export default RequestCard
import React,{useEffect} from 'react'
import { useState } from 'react'
import RequestCard from './RequestCrad'

function ViewRequests() {
    const [requests, setRequests]=useState(null)
    useEffect(()=>{
        fetch("http://localhost:3001/requests")
        .then((res)=>{
            return res.json()})
        .then ((data)=>{
            console.log (data)
            setRequests(data);
        })

    },[])

    function handleCancel(requestId) {
      fetch(`http://localhost:3001/requests/${requestId}`, {
        method: "DELETE",
      }).then(() => {
        const updateRequests=requests.filter((req)=> req.id !==requestId)
        setRequests(updateRequests)
      });
    }
  return (
    <div>
      {requests && <RequestCard requests={requests} handleCancel={handleCancel}/>} 
    </div>
  )
}
export default ViewRequests

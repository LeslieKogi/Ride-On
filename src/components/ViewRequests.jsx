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
  return (
    <div>
      {requests && <RequestCard requests={requests} />} 
    </div>
  )
}
export default ViewRequests

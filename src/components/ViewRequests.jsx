import React,{useEffect} from 'react'
import { useState } from 'react'
import RequestCard from './RequestCrad'
import ReportForm from './ReportForm'

function ViewRequests() {
  const [showReportFrom, setShowReportRorm]=useState(false)
  const [selectRequestId, setSelectRequestId]=useState(null)

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
     function handleReport(requestId) {
       setSelectRequestId(requestId)
       setShowReportRorm(true)
     }
     function handleClose(){
      setShowReportRorm(false)
      setSelectRequestId(null)
     }
  return (
    <div>
      {requests && <RequestCard requests={requests} handleCancel={handleCancel} handleReport={handleReport}/>} 
      {showReportFrom && 
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
       <ReportForm requestId={selectRequestId} onClose={handleClose}/>
      </div>}
    </div>
  )
}
export default ViewRequests

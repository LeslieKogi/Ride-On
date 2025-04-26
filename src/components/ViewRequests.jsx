import React,{useEffect} from 'react'
import { useState } from 'react'
import RequestCard from './RequestCrad'
import ReportForm from './ReportForm'
import SearchBar from "../components/SearchBar";
import Swal from 'sweetalert2';

function ViewRequests() {
  const [showReportFrom, setShowReportRorm]=useState(false)
  const [selectRequestId, setSelectRequestId]=useState(null)
  const [search, setSearch] = useState("");

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
           Swal.fire({
             title: "Cancelled!",
             text: "The request has been cancelled.",
             icon: "success",
             confirmButtonColor: "#3085d6",
             confirmButtonText: "OK",
           });
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

    const filterRequests = requests?.filter((req) => 
      req.destination.toLowerCase().includes(search.toLowerCase())
    );


  return (
    <div>
       <SearchBar search={search} setSearch={setSearch} />
      {filterRequests  && <RequestCard requests={filterRequests} handleCancel={handleCancel} handleReport={handleReport}/>} 
      {showReportFrom && 
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
       <ReportForm requestId={selectRequestId} onClose={handleClose}/>
      </div>}
    </div>
  )
}
export default ViewRequests

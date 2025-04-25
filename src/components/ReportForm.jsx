import React,{useState} from 'react'

function ReportForm({requestId,onClose}) {
const [comment,SetComment]=useState('')

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:3001/requests/${requestId}`,{
            method:"PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({ reported:true, comment_on_report:comment})
        })
        .then ((res)=>res.json())
        .then ((data)=>{
            console.log("Report submitted",data)
        })
        
    }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-red-300 p-5 border rounded mt-12">
        <div>
            <p className='text-lg font-semibold'>Please report any concerns or dissatisfaction with the customer service you received.</p>
        </div>
      <label>Comment on report</label>
      <input value={comment} onChange={(e)=>SetComment(e.target.value)} type="text" />
      <button type='submit' className='border p-2 ml-4 bg-black text-white rounded mt-4'>Submit</button>
      <button onClick={onClose} className='bg-black text-white p-2 border rounded ml-5 ' >close</button>
    </form>
  );
}
export default ReportForm
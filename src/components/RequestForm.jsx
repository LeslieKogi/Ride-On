import React,{useState} from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RequestForm() {
  const [name, setName]=useState('')
  const [pickup, setPickUp]=useState('')
  const [destination,setDestination]=useState('')
  const [number_of_passangers, setNumber_of_passengers] = useState(0);

function handlesubmit(e){
e.preventDefault()

const requests={name, pickup, destination, number_of_passangers ,reported:false, comment_on_repoort:""}

  fetch("http://localhost:3001/requests",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(requests)
  })
  .then(()=>{
    console.log("new request added")
    toast.success("Request submitted successfully!");
    
    setName('')
    setPickUp('')
    setDestination('')
    setNumber_of_passengers(0)
  })
  .catch (()=>{
    toast.error("Submission failed")
  })

}
  return (
    <div>
      <ToastContainer/>
      <form
        onSubmit={handlesubmit}
        className="max-w-sm mx-auto bg-black p-5 border border-rounded mt-12">
          <div><p className='text-white p-3 font-semibold'>Make a ride request to your desired destination</p></div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Pickup point
          </label>
          <input
            onChange={(e) => setPickUp(e.target.value)}
            value={pickup}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Destination
          </label>
          <input
            onChange={(e) => setDestination(e.target.value)}
            value={destination}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Number of passengers
          </label>
          <input
            value={number_of_passangers}
            onChange={(e) => setNumber_of_passengers(Number(e.target.value))}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default RequestForm

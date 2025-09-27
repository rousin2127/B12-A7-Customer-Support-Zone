import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import TicketManagement from "./components/TicketManagement"
import { Suspense } from "react"
import { ToastContainer } from 'react-toastify';

const fetchTicket= async()=>{
  const result= await fetch('/data.json')
  return result.json();
}

function App() {
 const fetchPromise=fetchTicket();
  return (
    <div className="bg-[#f3f3f3]">
      <Navbar />
      <Suspense fallback={<div className="text-center p-6">Loading tickets...</div>}>
      <TicketManagement fetchPromise={fetchPromise} />
      </Suspense>
      <Footer />  
      <ToastContainer />
    </div>

  )
}

export default App

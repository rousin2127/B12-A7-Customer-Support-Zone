import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Count from "./components/Count"
import TicketManagement from "./components/TicketManagement"
import { Suspense } from "react"

const fetchTicket= async()=>{
  const result= await fetch('/data.json')
  return result.json();
}

function App() {
 const fetchPromise=fetchTicket();
  return (
    <div>
      <Navbar />
      <Count />
      <Suspense fallback={<div className="text-center p-6">Loading tickets...</div>}>
      <TicketManagement fetchPromise={fetchPromise} />
      </Suspense>
      <Footer />  
    </div>

  )
}

export default App

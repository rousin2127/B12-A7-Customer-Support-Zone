import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Count from "./components/Count"
function App() {

  return (
    <div>
      <Navbar />
      <Count></Count>
      <main> 
        
        <div className="w-[1020px] mx-auto flex">
        <div className="w-[720px]">
            <div><h2>Customer Tickets</h2></div>
            <div>
              
            </div>
          </div>
          <div>
            <div>
              <h2>Task Status</h2>
            </div>
            <div>Resolved Task</div>
          </div>
        </div>
      </main>
      <Footer />  
    </div>

  )
}

export default App

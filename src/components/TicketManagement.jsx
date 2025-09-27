import React, { use, useState } from "react";
import Count from "./Count";
import { toast } from "react-toastify";
import DateImg from "./../assets/ri_calendar-line.png"

const TicketManagement = ({ fetchPromise }) => {
  const ticketsData = use(fetchPromise); 
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleSelectTicket = (ticket) => {
    if (ticket.status === "Open") {
      const updatedTickets = tickets.map((t) =>
        t.id === ticket.id ? { ...t, status: "In-Progress" } : t
      );
      setTickets(updatedTickets);
      setInProgressTickets([...inProgressTickets, { ...ticket, status: "In-Progress" }]);
      toast("In-progress")
    }
  };

  const handleComplete = (ticket) => {
    const updatedTickets = tickets.map((t) =>
      t.id === ticket.id ? { ...t, status: "Resolved" } : t
    );
    setTickets(updatedTickets);

    setInProgressTickets(inProgressTickets.filter((t) => t.id !== ticket.id));


    setResolvedTickets([...resolvedTickets, { ...ticket, status: "Resolved" }]);
    toast("Complete")

  };

  return (
    <div>
      
      <Count
        inProgressCount={inProgressTickets.length}
        resolvedCount={resolvedTickets.length}
      />

       {/* ticket card design */}
      
      <div className="sm:w-[1140px] my-[50px] sm:mx-auto mx-5  flex flex-col-reverse  sm:flex sm:flex-row">
        
        <div className="sm:w-[820px]">
          <h2 className="sm:text-xl font-bold mb-4 pb-2 ">Customer Tickets</h2>
          <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => handleSelectTicket(ticket)}
                className={` rounded p-3 cursor-pointer shadow-sm bg-white hover:shadow-md ${
                  ticket.status === "Resolved" ? "opacity-50" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[15px]">{ticket.title}</span>
                  <span
                    className={`px-2 py-1 text-xs rounded-[50px] ${
                      ticket.status === "Open"
                        ? "bg-green-200 text-green-800"
                        : ticket.status === "In-Progress"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </div>
                <p className="text-xs mt-[5px] text-gray-600">{ticket.description}</p>
                <div className="mt-2 text-xs text-gray-500 flex justify-between">
                  <div className="flex justify-center items-center gap-2">
                    <span className="font-semibold text-[11px]">{ticket.id}</span>
                    <div
                      className={`text-xs font-semibold ${
                        ticket.priority === "HIGH PRIORITY"
                          ? "text-red-600"
                          : ticket.priority === "MEDIUM PRIORITY"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {ticket.priority}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{ticket.customer}</span>
                    <span className="flex items-center gap-1"> <img src={DateImg} alt="" /> {ticket.createdAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Task Status */}
        <div className="ml-6 w-[280px] mx-auto ">
          <div >
          <div>
          <h2 className="sm:text-xl font-semibold sm:font-bold pb-2 ">Task Status</h2>
            </div>

          <div className="mb-6">
            {inProgressTickets.length > 0 ? (
              inProgressTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="mb-3 p-3  rounded shadow-sm bg-white"
                >
                  <h3 className="font-semibold mb-2">{ticket.title}</h3>
                  <button
                    onClick={() => handleComplete(ticket)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 w-full"
                  >
                    Complete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No tickets in progress</p>
            )}
          </div>
          </div>

      {/* resoloved ticket */}
          <div className="mb-12">
            <h3 className="font-semibold mb-2">Resolved Task</h3>
            {resolvedTickets.length > 0 ? (
             
                resolvedTickets.map((t) => (
                  
                  <div key={t.id} className="bg-[#E0E7FF] p-2  ml-4 mb-1 text-sm rounded-md">{t.title}</div>

                ))
              
            ) : (
              <p className="text-gray-500 text-sm">No resolved tasks yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketManagement;

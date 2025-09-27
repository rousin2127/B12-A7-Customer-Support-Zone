import React, { use, useState } from "react";
import Count from "./Count";
import { toast } from "react-toastify";

const TicketManagement = ({ fetchPromise }) => {
  const ticketsData = use(fetchPromise); // Suspends until data is ready
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  // Handle selecting a ticket → moves it to In-Progress
  const handleSelectTicket = (ticket) => {
    if (ticket.status === "Open") {
      const updatedTickets = tickets.map((t) =>
        t.id === ticket.id ? { ...t, status: "In-Progress" } : t
      );
      setTickets(updatedTickets);
      setInProgressTickets([...inProgressTickets, { ...ticket, status: "In-Progress" }]);
      toast("in-progress")
    }
  };

  // Handle completing a ticket → moves it to Resolved
  const handleComplete = (ticket) => {
    const updatedTickets = tickets.map((t) =>
      t.id === ticket.id ? { ...t, status: "Resolved" } : t
    );
    setTickets(updatedTickets);

    // Remove from In-Progress
    setInProgressTickets(inProgressTickets.filter((t) => t.id !== ticket.id));

    // Add to Resolved
    setResolvedTickets([...resolvedTickets, { ...ticket, status: "Resolved" }]);
    toast("complete")

  };

  return (
    <div>
      
      <Count
        inProgressCount={inProgressTickets.length}
        resolvedCount={resolvedTickets.length}
      />

      
      <div className="w-[1140px] my-[50px] mx-auto flex">
        
        <div className="w-[820px]">
          <h2 className="text-xl font-bold mb-4 pb-2">Customer Tickets</h2>
          <div className="grid grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => handleSelectTicket(ticket)}
                className={`border rounded p-3 cursor-pointer shadow-sm bg-white hover:shadow-md ${
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
                  <div className="flex gap-2">
                    <span className="font-medium">{ticket.customer}</span>
                    <span>{ticket.createdAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Task Status */}
        <div className="ml-6 w-[280px]">
          <h2 className="text-xl font-bold pb-2">Task Status</h2>

          {/* In-Progress Tickets */}
          <div className="mb-6">
            {inProgressTickets.length > 0 ? (
              inProgressTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="mb-3 p-3 border rounded shadow-sm bg-white"
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

          {/* Resolved Tickets */}
          <div>
            <h3 className="font-semibold mb-2">Resolved Task</h3>
            {resolvedTickets.length > 0 ? (
              <div className="bg-[#E0E7FF] p-2  ml-4 text-sm rounded-md">
                {resolvedTickets.map((t) => (
                  <div key={t.id}>{t.title}</div>
                ))}
              </div>
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
